import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  aboutNavigation,
  institution,
  primaryNavigation,
} from '../content/site'
import { Brand, PortalLink } from './ui'

export function DesktopNav() {
  const [open, setOpen] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  useEffect(() => {
    if (!open) return
    function outside(event: PointerEvent) {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false)
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        trigger.current?.focus()
      }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [open])
  return (
    <div className="desktop-nav">
      <div className="container nav-row">
        <nav aria-label="Основная навигация">
          {primaryNavigation.map((item) =>
            item.to === '/about' ? (
              <div
                className="nav-dropdown"
                ref={wrapper}
                key={item.to}
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(event.relatedTarget as Node)
                  )
                    setOpen(false)
                }}
              >
                <div
                  className={`nav-about ${location.pathname.startsWith('/about') ? 'active' : ''}`}
                >
                  <NavLink to={item.to} onClick={() => setOpen(false)}>
                    О нас
                  </NavLink>
                  <button
                    ref={trigger}
                    aria-label="Разделы о факультете"
                    aria-expanded={open}
                    aria-controls="desktop-about-links"
                    onClick={() => setOpen(!open)}
                  >
                    <ChevronDown size={15} />
                  </button>
                </div>
                {open && (
                  <div className="dropdown-panel" id="desktop-about-links">
                    {aboutNavigation.map((link) => (
                      <NavLink
                        end
                        to={link.to}
                        key={link.to}
                        onClick={() => setOpen(false)}
                      >
                        {link.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink to={item.to} end={item.to === '/'} key={item.to}>
                {item.title}
              </NavLink>
            ),
          )}
        </nav>
        <PortalLink className="button button-primary portal-nav" />
      </div>
    </div>
  )
}

export function MobileNav() {
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement>(null)
  const closer = useRef<HTMLButtonElement>(null)
  const [expanded, setExpanded] = useState(true)
  const close = () => dialog.current?.close()
  useEffect(
    () => () => {
      document.body.style.overflow = ''
    },
    [],
  )
  function show() {
    dialog.current?.showModal()
    closer.current?.focus()
    document.body.style.overflow = 'hidden'
  }
  return (
    <div className="mobile-nav">
      <button
        className="menu-opener"
        ref={opener}
        onClick={show}
        aria-label="Открыть меню"
        aria-haspopup="dialog"
      >
        <Menu size={24} />
        <span>Меню</span>
      </button>
      <dialog
        className="mobile-dialog"
        ref={dialog}
        aria-labelledby="mobile-menu-title"
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return
          const items = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled])',
            ),
          ).filter((item) => item.getClientRects().length > 0)
          const first = items[0]
          const last = items.at(-1)
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault()
            last?.focus()
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first?.focus()
          }
        }}
        onClose={() => {
          document.body.style.overflow = ''
          opener.current?.focus()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
      >
        <div className="mobile-dialog-content">
          <div className="mobile-dialog-header">
            <Brand compact />
            <button
              className="icon-button"
              ref={closer}
              onClick={close}
              aria-label="Закрыть меню"
              autoFocus
            >
              <X />
            </button>
          </div>
          <h2 id="mobile-menu-title" className="sr-only">
            Навигация по сайту
          </h2>
          <nav
            aria-label="Мобильная навигация"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) close()
            }}
          >
            {primaryNavigation.map((item) =>
              item.to === '/about' ? (
                <div className="mobile-about" key={item.to}>
                  <div>
                    <NavLink to="/about">О нас</NavLink>
                    <button
                      className="icon-button"
                      aria-label="Разделы о факультете"
                      aria-expanded={expanded}
                      aria-controls="mobile-about-links"
                      onClick={() => setExpanded(!expanded)}
                    >
                      <ChevronDown
                        className={expanded ? 'rotated' : ''}
                        size={20}
                      />
                    </button>
                  </div>
                  <div id="mobile-about-links" hidden={!expanded}>
                    {aboutNavigation.slice(1).map((link) => (
                      <NavLink end key={link.to} to={link.to}>
                        {link.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink end={item.to === '/'} key={item.to} to={item.to}>
                  {item.title}
                </NavLink>
              ),
            )}
            <PortalLink className="mobile-portal" />
          </nav>
          <div className="mobile-menu-foot">
            <span className="eyebrow">{institution.university}</span>
            <p>Факультет ветеринарной медицины и биотехнологии</p>
            <a
              href={institution.official}
              target="_blank"
              rel="noopener noreferrer"
            >
              Официальный сайт факультета
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </dialog>
    </div>
  )
}
