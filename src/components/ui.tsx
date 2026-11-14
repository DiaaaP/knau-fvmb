import type { ReactNode } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { institution } from '../content/site'

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className={'brand' + (compact ? ' brand-compact' : '')}
      to="/"
      aria-label={institution.fullName + ' — главная'}
    >
      <span className="university-wordmark" aria-hidden="true">
        КНАУ<span>им. К.И. Скрябина</span>
      </span>
      <span className="brand-name">
        {compact ? 'Факультет ветеринарной медицины' : institution.name}
      </span>
    </Link>
  )
}

export function PortalLink({
  className = '',
  children = 'Образовательный портал',
}: {
  className?: string
  children?: ReactNode
}) {
  return (
    <a
      className={className}
      href={institution.portal}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ExternalLink size={15} aria-hidden="true" />
      <span className="sr-only"> (откроется в новой вкладке)</span>
    </a>
  )
}

export function ArrowLink({
  to,
  children,
  className = '',
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link className={'arrow-link ' + className} to={to}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  )
}

export function SectionHeading({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
