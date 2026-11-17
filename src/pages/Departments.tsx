import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '../components/Layout'
import { OfficeContacts } from '../components/Sections'
import { ArrowLink } from '../components/ui'
import {
  departments,
  departmentPath,
  departmentHead,
} from '../content/departments'
import { asset } from '../content/assets'
import { PhotoGallery } from '../components/PhotoGallery'
import { NotFound } from './Placeholder'

export function DepartmentList() {
  return (
    <div className="container">
      <Breadcrumbs title="Кафедры" />
      <div className="page-heading">
        <span className="eyebrow">Структура факультета</span>
        <h1>Кафедры</h1>
      </div>
      <div className="department-directory">
        {departments.map((department) => (
          <Link
            className="department-directory-row"
            key={department.slug}
            to={departmentPath(department)}
          >
            <h2>{department.name}</h2>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export function DepartmentPage() {
  const { slug } = useParams()
  const department = departments.find((item) => item.slug === slug)
  if (!department) return <NotFound />
  const { head, gallery, mission, studySections } = department
  return (
    <div className="container">
      <Breadcrumbs title={department.name} />
      <div className="page-heading">
        <span className="eyebrow">Кафедры факультета</span>
        <h1>{department.name}</h1>
      </div>
      <article className="department-content">
        {department.image && (
          <img
            className="department-team-photo"
            src={asset(department.image)}
            alt={`Коллектив — ${department.name}`}
            width={1150}
            height={255}
          />
        )}
        <section className="department-section">
          <h2>О кафедре</h2>
          {mission ? (
            mission.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          ) : (
            <p className="muted">
              Описание кафедры, её состав и учебные дисциплины будут добавлены
              после уточнения.
            </p>
          )}
        </section>
        {head && (
          <section className="department-section">
            <h2>Состав кафедры</h2>
            <article className="department-head">
              <Link to={head.route}>
                <img
                  src={asset(head.image)}
                  alt={head.name}
                  width={285}
                  height={357}
                  loading="lazy"
                />
              </Link>
              <div>
                <h3>{head.name}</h3>
                <p>{head.role}</p>
                <ArrowLink to={head.route}>Подробнее о заведующей</ArrowLink>
              </div>
            </article>
            {gallery && <PhotoGallery images={gallery} />}
          </section>
        )}
        {studySections && (
          <section className="department-section">
            <h2>Направления и специальности подготовки</h2>
            <div className="source-accordions">
              {studySections.map(({ title, description }) => (
                <details key={title}>
                  <summary>{title}</summary>
                  <p>{description}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        <section className="department-section resource-panel department-contact">
          <h2>Вопросы о кафедре</h2>
          <ArrowLink to="/about/deans-office">Контакты деканата</ArrowLink>
        </section>
        <div className="document-next">
          <ArrowLink to="/departments">Все кафедры</ArrowLink>
        </div>
      </article>
    </div>
  )
}

export function DepartmentHeadProfile() {
  return (
    <div className="container">
      <Breadcrumbs title={departmentHead.name} />
      <div className="page-heading">
        <span className="eyebrow">Состав кафедры</span>
        <h1>{departmentHead.name}</h1>
        <p className="page-description">{departmentHead.role}</p>
      </div>
      <div className="person-profile">
        <img
          className="person-portrait"
          src={asset(departmentHead.image)}
          alt={departmentHead.name}
          width={285}
          height={357}
        />
        <section>
          <h2>Кафедра</h2>
          <p>{departments[0].name}</p>
          <h2 className="content-heading">Связь с факультетом</h2>
          <OfficeContacts />
          <div className="document-next">
            <ArrowLink to="/departments/infectious-diseases">
              Вернуться на кафедру
            </ArrowLink>
          </div>
        </section>
      </div>
    </div>
  )
}
