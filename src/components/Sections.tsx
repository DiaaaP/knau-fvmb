import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  Microscope,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { destinations, staff } from '../content/site'
import {
  ArrowLink,
  DraftNotice,
  EmptyPanel,
  MediaPlaceholder,
  PortalLink,
  SectionHeading,
} from './ui'

export function ServiceLinks({
  heading = true,
  compact = false,
}: {
  heading?: boolean
  compact?: boolean
}) {
  const icons = [
    BookOpen,
    ShieldCheck,
    UsersRound,
    GraduationCap,
    BookOpen,
    Microscope,
    UsersRound,
  ]
  return (
    <>
      {heading && (
        <SectionHeading
          eyebrow="Быстрый доступ"
          title="Полезная информация и сервисы"
          description="Разделы факультета и образовательные ресурсы"
        />
      )}
      <div className={`service-grid ${compact ? 'service-grid-compact' : ''}`}>
        {destinations.slice(0, 6).map((item, i) => {
          const Icon = icons[i]
          return (
            <Link className="service-card" key={item.to} to={item.to}>
              <span className="icon-tile">
                <Icon size={23} strokeWidth={1.6} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="service-more">
                Перейти в раздел <span aria-hidden="true">→</span>
              </span>
            </Link>
          )
        })}
        <div className="service-card service-portal">
          <span className="icon-tile">
            <GraduationCap size={26} />
          </span>
          <h3>Образовательный портал AVN</h3>
          <p>
            Образовательная информационная система Кыргызского национального
            аграрного университета.
          </p>
          <PortalLink className="button button-primary">Войти в AVN</PortalLink>
        </div>
      </div>
    </>
  )
}

export function StaffCard() {
  return (
    <article className="staff-card">
      <MediaPlaceholder portrait caption="Фотография сотрудника" />
      <div className="staff-card-content">
        <span className="eyebrow">Учебный процесс</span>
        <h3>{staff.name}</h3>
        <p>{staff.draftRole}</p>
        <span className="muted small">Должность требует подтверждения</span>
        <ArrowLink to={staff.route}>Профиль сотрудника</ArrowLink>
      </div>
    </article>
  )
}

export function Leadership({ full = false }: { full?: boolean }) {
  return (
    <>
      <SectionHeading
        eyebrow="Администрация"
        title={
          full ? 'Руководство и сотрудники деканата' : 'Руководство факультета'
        }
        action={
          !full && (
            <ArrowLink to="/about/deans-office">Перейти в деканат</ArrowLink>
          )
        }
      />
      <div className="leadership-grid">
        <article className="dean-card panel">
          <MediaPlaceholder portrait caption="Фотография декана" />
          <div>
            <span className="eyebrow">Руководитель факультета</span>
            <h3>Декан факультета</h3>
            <p>
              Имя, квалификация и сведения о руководителе будут добавлены после
              согласования.
            </p>
            <DraftNotice>
              Наименование «имени А.А. Алдашева» требует подтверждения.
            </DraftNotice>
            <ArrowLink
              className="button button-primary"
              to="/about/deans-office"
            >
              Информация о деканате
            </ArrowLink>
          </div>
        </article>
        <StaffCard />
      </div>
    </>
  )
}

export function ContactSection() {
  return (
    <div className="two-column">
      <div>
        <SectionHeading
          eyebrow="Связь с факультетом"
          title="Контакты и расположение"
        />
        <p className="muted">
          Официальные контактные сведения будут доступны после согласования.
        </p>
        <EmptyPanel title="Контактная информация уточняется">
          Адрес, телефон, электронная почта и часы приёма пока не опубликованы в
          прототипе.
        </EmptyPanel>
        <ArrowLink to="/contacts">Перейти к контактам</ArrowLink>
      </div>
      <MediaPlaceholder
        caption="Схема расположения факультета"
        className="map-placeholder"
      />
    </div>
  )
}

export function AcademicProfile() {
  return (
    <>
      <SectionHeading eyebrow="Академический профиль" title="О факультете" />
      <div className="two-column">
        <article className="panel prose">
          <h3>Ветеринарная медицина и биотехнология</h3>
          <p>
            Факультет ветеринарной медицины и биотехнологии КНАУ им. К.И.
            Скрябина.
          </p>
          <p className="muted">
            Здесь будут представлены история факультета, образовательные
            программы и направления научной работы. Подробные сведения проходят
            согласование.
          </p>
          <ArrowLink to="/about">Подробнее о факультете</ArrowLink>
        </article>
        <div className="feature-stack">
          {[
            {
              title: 'Образование',
              text: 'Программы и направления подготовки',
              icon: GraduationCap,
            },
            {
              title: 'Наука',
              text: 'Исследования и академическое сотрудничество',
              icon: FlaskConical,
            },
            {
              title: 'Практика',
              text: 'Клиническая и лабораторная подготовка',
              icon: Microscope,
            },
          ].map((item) => (
            <div className="feature-row panel" key={item.title}>
              <item.icon aria-hidden="true" size={25} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
