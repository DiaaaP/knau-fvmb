import type { ReactNode } from 'react'
import { ArrowRight, ExternalLink, Landmark, ImageOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { institution } from '../content/site'

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className={'brand' + (compact ? ' brand-compact' : '')}
      to="/"
      aria-label={institution.fullName + ' — главная'}
    >
      <span className="brand-symbol" aria-hidden="true">
        <Landmark strokeWidth={1.4} />
      </span>
      <span>
        <span className="brand-name">{compact ? 'ФВМ' : institution.name}</span>
        <span className="brand-university">{institution.university}</span>
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
      <ArrowRight size={17} aria-hidden="true" />
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

export function FacultyImagePlaceholder() {
  return (
    <div
      className="media-placeholder"
      role="img"
      aria-label="Фотография факультета пока не добавлена"
    >
      <ImageOff size={44} strokeWidth={1} aria-hidden="true" />
      <span>Учебно-клиническая база факультета</span>
      <small>Фотография будет добавлена</small>
    </div>
  )
}
