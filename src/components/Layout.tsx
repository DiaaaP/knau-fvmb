import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  aboutNavigation,
  institution,
  primaryNavigation,
  staff,
} from '../content/site'
import { Brand } from './ui'
import { DesktopNav, MobileNav } from './Navigation'

export function InstitutionalBar() {
  return (
    <div className="institutional-bar">
      <div className="container institutional-inner">
        <p>
          <span>{institution.ministry}</span>
        </p>
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
        <MobileNav />
      </div>
      <DesktopNav />
    </header>
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
      <span className="section-label">О факультете</span>
      <nav aria-label="Разделы о факультете">
        {aboutNavigation.map((link) => (
          <NavLink end key={link.to} to={link.to}>
            {link.title}
            <span aria-hidden="true">↗</span>
          </NavLink>
        ))}
      </nav>
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
    document.title = title + ' — ФВМ ' + institution.university
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
    </>
  )
}
