import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const base = process.env.SMOKE_URL || 'http://127.0.0.1:4173/knau-fvmb/'
const ministry =
  'МИНИСТЕРСТВО НАУКИ, ВЫСШЕГО ОБРАЗОВАНИЯ И ИННОВАЦИЙ КЫРГЫЗСКОЙ РЕСПУБЛИКИ'
const routes = [
  '/',
  '/about',
  '/about/mission',
  '/about/deans-office',
  '/about/deans-office/anarbek-uulu-sovetbek',
  '/industrial-council',
]
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
const errors = []
const failures = []
page.on('pageerror', (error) => errors.push(error.message))
page.on('response', (response) => {
  if (response.status() >= 400)
    failures.push(`${response.status()} ${response.url()}`)
})
await mkdir('artifacts', { recursive: true })
const report = { base, layouts: [], accessibility: [], interactions: [] }
try {
  for (const width of [390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 950 })
    for (const route of routes) {
      await page.goto(`${base}#${route}`)
      await page.locator('h1').waitFor()
      await page.evaluate(() => document.fonts.ready)
      assert.equal(await page.locator('h1').count(), 1, `${width} ${route}: h1`)
      assert.equal(
        await page.locator('footer').count(),
        0,
        'Removed footer must stay absent',
      )
      assert.match(
        await page
          .locator('h1')
          .evaluate((element) => getComputedStyle(element).fontFamily),
        /Manrope/,
        'Restore original heading font',
      )
      assert.equal(
        await page
          .locator('.institutional-inner p')
          .evaluate((element) => getComputedStyle(element).textAlign),
        'center',
        'Centre ministry line',
      )
      assert.doesNotMatch(
        await page.locator('main').innerText(),
        /Фундаментальная и прикладная наука|Научная работа|Биотехнология и генетика/,
        'Removed mission blocks must stay absent',
      )
      assert.doesNotMatch(
        await page.locator('body').innerText(),
        /биотех|ФВМиБ/i,
        'Removed identity must not remain visible',
      )
      assert.equal(
        await page
          .locator(
            'a[href="#/applicants"], a[href="#/students"], a[href="#/departments"], a[href="#/contacts"]',
          )
          .count(),
        0,
        'Empty sections must not remain linked',
      )
      assert.equal(
        await page.locator('.institutional-bar p span').textContent(),
        ministry,
      )
      const layout = await page.evaluate(() => {
        const bar = document.querySelector('.institutional-bar p span')
        const box = bar.getBoundingClientRect()
        return {
          width: innerWidth,
          scroll: document.documentElement.scrollWidth,
          ministryVisible:
            box.left >= 0 &&
            box.right <= innerWidth &&
            box.height > 0 &&
            bar.scrollWidth <= bar.clientWidth + 1,
        }
      })
      assert(
        layout.scroll <= width + 1,
        `${width} ${route}: overflow ${layout.scroll}`,
      )
      assert(layout.ministryVisible, `${width} ${route}: ministry clipping`)
      for (const link of await page
        .locator('a[href="https://avn.knau.kg"]')
        .all()) {
        assert.equal(await link.getAttribute('target'), '_blank')
        assert.match(await link.getAttribute('rel'), /noopener/)
        assert.match(await link.getAttribute('rel'), /noreferrer/)
      }
      const invalid = await page.locator('a[href="#"], a:not([href])').count()
      assert.equal(invalid, 0, `${route}: dead anchors`)
      report.layouts.push({ width, route, passed: true })
      if ([390, 1440].includes(width)) {
        await page.screenshot({
          path: `artifacts/v3-${width}-${route === '/' ? 'home' : route.replaceAll('/', '-').slice(1)}.png`,
          fullPage: true,
        })
      }
    }
  }
  await page.setViewportSize({ width: 1440, height: 950 })
  await page.goto(base)
  const dropdown = page.getByRole('button', { name: 'Разделы о факультете' })
  await dropdown.focus()
  await page.keyboard.press('Enter')
  assert.equal(await dropdown.getAttribute('aria-expanded'), 'true')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Tab')
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent),
    'Миссия',
  )
  await page.keyboard.press('Enter')
  await page.waitForURL('**#/about/mission')
  assert.equal(await page.locator('#desktop-about-links').count(), 0)
  await dropdown.click()
  await page.keyboard.press('Escape')
  assert.equal(await dropdown.getAttribute('aria-expanded'), 'false')
  assert(
    await dropdown.evaluate((element) => element === document.activeElement),
  )
  report.interactions.push(
    'Desktop dropdown: keyboard navigation, route, Escape, focus return',
  )

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(base)
  const opener = page.getByRole('button', { name: 'Открыть меню' })
  await opener.click()
  const dialog = page.getByRole('dialog')
  assert(await dialog.isVisible())
  await page.keyboard.press('Shift+Tab')
  await page.keyboard.press('Shift+Tab')
  assert(
    await dialog.evaluate((element) =>
      element.contains(document.activeElement),
    ),
    'Focus must stay inside dialog',
  )
  const expander = dialog.getByRole('button', { name: 'Разделы о факультете' })
  await expander.click()
  assert.equal(await expander.getAttribute('aria-expanded'), 'false')
  await expander.click()
  await dialog.getByRole('link', { name: 'Миссия', exact: true }).click()
  await page.waitForURL('**#/about/mission')
  assert.equal(await dialog.isVisible(), false)
  await page.reload()
  assert.match(await page.locator('h1').textContent(), /Миссия/)
  await opener.click()
  await page.keyboard.press('Escape')
  assert.equal(await dialog.isVisible(), false)
  assert(await opener.evaluate((element) => element === document.activeElement))
  assert.equal(await page.evaluate(() => document.body.style.overflow), '')
  report.interactions.push(
    'Mobile menu: focus containment, submenu, route, reload, Escape, focus return',
  )

  // Follow every internal route destination from its rendered anchor, not only direct URL navigation.
  await page.setViewportSize({ width: 1440, height: 950 })
  for (const route of routes) {
    await page.goto(`${base}#/`)
    if (route.includes('anarbek')) {
      await page
        .locator('main')
        .getByRole('link', { name: /Деканат/ })
        .click()
      await page
        .locator('main')
        .getByRole('link', { name: 'Профиль сотрудника' })
        .click()
    } else {
      const anchor = page
        .locator(`a[href="#${route}"]`)
        .filter({ visible: true })
        .first()
      await anchor.click()
    }
    await page.waitForURL(`**#${route}`)
  }
  report.interactions.push(
    'All six route destinations followed through visible links',
  )

  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 950 })
    for (const route of [
      '/',
      '/about/mission',
      '/about/deans-office/anarbek-uulu-sovetbek',
      '/industrial-council',
    ]) {
      await page.goto(`${base}#${route}`)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
      report.accessibility.push({
        width,
        route,
        violations: results.violations.map((v) => ({
          id: v.id,
          description: v.description,
          nodes: v.nodes.map((n) => n.target),
        })),
      })
      assert.equal(
        results.violations.length,
        0,
        `Accessibility ${width} ${route}: ${results.violations.map((v) => v.id).join(', ')}`,
      )
    }
  }
  await page.goto(`${base}#/industrial-council`)
  assert.equal(await page.locator('.council-group').count(), 5)
  assert.equal(await page.locator('.council-tasks>li').count(), 8)
  assert.match(
    await page.locator('#council-composition').textContent(),
    /Предлагаемый состав/,
  )
  assert.match(
    await page.locator('.council-purpose').textContent(),
    /требованиям рынка труда/,
  )
  assert.doesNotMatch(
    await page.locator('main').innerText(),
    /Госпожа Карина|Я бы предложил|Моя рекомендация/,
  )
  await page.goto(`${base}#/missing-page`)
  assert.match(await page.locator('h1').textContent(), /Такой страницы/)
  assert.deepEqual(errors, [], 'Browser errors')
  assert.deepEqual(failures, [], 'Failed network requests')
  console.log(
    `PASS: ${report.layouts.length} route/viewport checks, menus, refresh, link attributes, ${report.accessibility.length} axe audits; no browser/network errors.`,
  )
} finally {
  await writeFile(
    'artifacts/smoke-report.json',
    JSON.stringify({ ...report, errors, failures }, null, 2),
  )
  await browser.close()
}
