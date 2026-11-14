import type { ReactNode } from 'react'
import {
  ArrowRight,
  ExternalLink,
  ImageOff,
  Landmark,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { institution } from '../content/site'

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className={`brand${compact ? ' brand-compact' : ''}`}
      to="/"
      aria-label={`${institution.fullName} — главная`}
    >
      <span className="brand-symbol" aria-hidden="true">
        <Landmark strokeWidth={1.4} />
      </span>
      <span>
        <span className="brand-name">
          {compact ? 'ФВМиБ' : institution.name}
        </span>
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
    <Link className={`arrow-link ${className}`} to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  )
}

export function DraftNotice({ children }: { children?: ReactNode }) {
  return (
    <p className="draft-notice">
      <span className="draft-tag">На согласовании</span>
      {children ||
        'Проект текста. Формулировки требуют утверждения факультетом.'}
    </p>
  )
}

export function MediaPlaceholder({
  portrait = false,
  caption,
  className = '',
}: {
  portrait?: boolean
  caption?: string
  className?: string
}) {
  const Icon = portrait ? UserRound : ImageOff
  return (
    <div
      className={`media-placeholder ${portrait ? 'portrait-placeholder' : ''} ${className}`}
      role="img"
      aria-label={caption || 'Изображение ожидает согласования'}
    >
      <Icon size={portrait ? 58 : 44} strokeWidth={1} aria-hidden="true" />
      <span>
        {caption ||
          (portrait
            ? 'Фотография будет добавлена'
            : 'Изображение будет добавлено')}
      </span>
      <small>Ожидает согласования</small>
    </div>
  )
}

export function EmptyPanel({
  title = 'Материалы готовятся',
  children,
}: {
  title?: string
  children?: ReactNode
}) {
  return (
    <div className="empty-panel">
      <span className="eyebrow">Раздел прототипа</span>
      <h3>{title}</h3>
      <p>
        {children ||
          'Утверждённые сведения будут опубликованы после согласования с факультетом.'}
      </p>
    </div>
  )
}
