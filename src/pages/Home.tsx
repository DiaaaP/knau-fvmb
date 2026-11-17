import { GraduationCap } from 'lucide-react'
import { institution } from '../content/site'
import { FacultyLinks } from '../components/Sections'
import { ArrowLink, PortalLink } from '../components/ui'
import { council } from '../content/council'
import { asset } from '../content/assets'
import { departments, departmentPath } from '../content/departments'
import { usePublishedContent } from '../content/PublishedContent'

export default function Home() {
  const { homeIntro } = usePublishedContent()
  return (
    <>
      <section className="home-hero section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow hero-eyebrow">
              Кыргызский национальный аграрный университет
            </span>
            <h1>{institution.name}</h1>
            <p className="hero-university">{institution.university}</p>
            <p className="hero-description">{homeIntro}</p>
            <div className="button-row">
              <ArrowLink className="button button-primary" to="/applicants">
                Как поступить
              </ArrowLink>
              <PortalLink className="button button-outline">
                <GraduationCap size={19} aria-hidden="true" />
                Портал AVN
              </PortalLink>
            </div>
            <div className="hero-fields">
              <div>
                <strong>Образование</strong>
                <span>Подготовка специалистов</span>
              </div>
              <div>
                <strong>Практика</strong>
                <span>Клиническое обучение</span>
              </div>
              <div>
                <strong>Сотрудничество</strong>
                <span>Связь с работодателями</span>
              </div>
            </div>
          </div>
          <figure className="hero-media">
            <img
              className="hero-photo"
              src={asset('faculty-laboratory.webp')}
              alt="Практическое занятие в лаборатории факультета"
              width={576}
              height={383}
            />
            <figcaption>
              <GraduationCap size={23} aria-hidden="true" />
              <div>
                <strong>
                  Ветеринарное образование и практическая подготовка
                </strong>
                <span>{institution.university}</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container faculty-overview-grid">
          <div>
            <span className="eyebrow">Информация о факультете</span>
            <h2>О факультете</h2>
            <p className="muted">{institution.fullName}.</p>
            <ArrowLink to="/about">Подробнее о факультете</ArrowLink>
          </div>
          <FacultyLinks />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Кафедры факультета</h2>
          <ul className="department-links">
            {departments.map((department) => (
              <li key={department.slug}>
                <ArrowLink to={departmentPath(department)}>
                  {department.name}
                </ArrowLink>
              </li>
            ))}
          </ul>
          <ArrowLink to="/departments">Все кафедры</ArrowLink>
        </div>
      </section>
      <section className="section">
        <div className="container council-preview">
          <div>
            <span className="eyebrow">Университет и работодатели</span>
            <h2>{council.title}</h2>
            <p>{council.summary}</p>
          </div>
          <ArrowLink className="button button-primary" to="/industrial-council">
            Подробнее о совете
          </ArrowLink>
        </div>
      </section>
    </>
  )
}
