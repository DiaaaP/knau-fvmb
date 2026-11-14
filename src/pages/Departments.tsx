import { Link, useParams } from 'react-router-dom'
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
        {departments.map((department, index) => (
          <Link
            className="department-directory-row"
            key={department.slug}
            to={departmentPath(department)}
          >
            <span>0{index + 1}</span>
            <h2>{department.name}</h2>
            <span aria-hidden="true">→</span>
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
            alt="Коллектив кафедры инфекционных и инвазионных болезней животных"
            width={1150}
            height={255}
          />
        )}
        {department.mission ? (
          <>
            <section className="department-section">
              <h2>Миссия кафедры</h2>
              {department.mission.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
            <section className="department-section">
              <h2>Направления и специальности подготовки</h2>
              <div className="source-accordions">
                <details>
                  <summary>История становления и развития кафедры</summary>
                  <p>Исторические материалы раздела дополняются.</p>
                </details>
                <details>
                  <summary>Профильные направления подготовки</summary>
                  <p>
                    Подробная информация об образовательных направлениях
                    дополняется.
                  </p>
                </details>
              </div>
            </section>
            <section className="department-section">
              <h2>Состав кафедры</h2>
              <article className="department-head">
                <Link to={departmentHead.route}>
                  <img
                    src={asset(departmentHead.image)}
                    alt={departmentHead.name}
                    width={285}
                    height={357}
                    loading="lazy"
                  />
                </Link>
                <div>
                  <h3>{departmentHead.name}</h3>
                  <p>{departmentHead.role}</p>
                  <ArrowLink to={departmentHead.route}>
                    Подробнее о заведующей
                  </ArrowLink>
                </div>
              </article>
              <PhotoGallery />
            </section>
            <section className="department-section">
              <h2>Международное сотрудничество кафедры</h2>
              <p className="muted">Материалы раздела дополняются.</p>
            </section>
          </>
        ) : (
          <section className="department-section">
            <h2>О кафедре</h2>
            <p className="muted">Подробные материалы кафедры дополняются.</p>
          </section>
        )}
        <section className="department-section">
          <h2>Связь с факультетом</h2>
          <OfficeContacts />
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
