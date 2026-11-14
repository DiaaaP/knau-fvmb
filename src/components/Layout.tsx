import { useLayoutEffect, useRef } from 'react'
import { ExternalLink, Landmark } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  aboutNavigation,
  institution,
  primaryNavigation,
  staff,
} from '../content/site'
import { Brand, PortalLink } from './ui'
import { DesktopNav, MobileNav } from './Navigation'

export function InstitutionalBar() {
  return (
    <div className="institutional-bar">
      <div className="container institutional-inner">
        <p>
          <Landmark size={15} aria-hidden="true" />
          <span>{institution.ministry}</span>
        </p>
        <a href="https://knau.kg" target="_blank" rel="noopener noreferrer">
          Сайт КНАУ
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <InstitutionalBar />
      <div className="container identity-row">
        <Brand />
        <span className="header-note">
          Ветеринарная медицина
          <br />и биотехнология
        </span>
        <MobileNav />
      </div>
      <DesktopNav />
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>{institution.prototype}</p>
          <span className="footer-label">Демонстрационная версия</span>
        </div>
        <nav aria-label="Навигация в подвале">
          <h2>Навигация</h2>
          {primaryNavigation.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.title}
            </Link>
          ))}
        </nav>
        <div>
          <h2>Полезные ресурсы</h2>
          <PortalLink />
          <a
            href={institution.official}
            target="_blank"
            rel="noopener noreferrer"
          >
            Официальный сайт факультета
            <ExternalLink size={14} />
          </a>
          <p>Контакты и график приёма будут добавлены после подтверждения.</p>
          <Link to="/contacts">Контактная информация →</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {institution.university}
        </span>
        <span>Прототип ФВМиБ</span>
      </div>
    </footer>
  )
}

export function Breadcrumbs({
  title,
  profile = false,
}: {
  title: string
  profile?: boolean
}) {
  const { pathname } = useLocation()
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <ol>
        <li>
          <Link to="/">Главная</Link>
        </li>
        {pathname.startsWith('/about/') && (
          <li>
            <Link to="/about">О нас</Link>
          </li>
        )}
        {profile && (
          <li>
            <Link to="/about/deans-office">Деканат</Link>
          </li>
        )}
        <li aria-current="page">{title}</li>
      </ol>
    </nav>
  )
}

export function AboutSidebar() {
  return (
    <aside className="about-sidebar">
      <span className="eyebrow">О факультете</span>
      <nav aria-label="Разделы о факультете">
        {aboutNavigation.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.title}
            <span aria-hidden="true">›</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-portal">
        <h3>Образовательный портал</h3>
        <p>Переход к системе AVN КНАУ</p>
        <PortalLink className="arrow-link">Открыть AVN</PortalLink>
      </div>
    </aside>
  )
}

export function SiteLayout() {
  const location = useLocation()
  const main = useRef<HTMLElement>(null)
  const previousPath = useRef(location.pathname)
  useLayoutEffect(() => {
    const title =
      location.pathname === '/'
        ? 'Главная'
        : location.pathname === staff.route
          ? staff.name
          : [...primaryNavigation, ...aboutNavigation].find(
              (item) => item.to === location.pathname,
            )?.title || 'Страница'
    document.title = `${title} — ФВМиБ ${institution.university}`
    if (previousPath.current !== location.pathname) {
      window.scrollTo(0, 0)
      main.current?.focus({ preventScroll: true })
      previousPath.current = location.pathname
    }
  }, [location.pathname])
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          main.current?.focus()
          main.current?.scrollIntoView()
        }}
      >
        Перейти к содержимому
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
