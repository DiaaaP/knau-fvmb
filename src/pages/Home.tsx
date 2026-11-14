import { institution } from '../content/site'
import { FacultyLinks } from '../components/Sections'
import { ArrowLink, PortalLink } from '../components/ui'

export default function Home() {
  return (
    <>
      <section className="home-intro">
        <div className="container home-intro-grid">
          <div>
            <p className="section-label">{institution.university}</p>
            <h1>{institution.name}</h1>
            <p className="intro-caption">
              Кыргызский национальный аграрный университет
              <br />
              имени К.И. Скрябина
            </p>
            <ArrowLink to="/about">О факультете</ArrowLink>
          </div>
          <aside className="portal-aside">
            <span className="section-label">
              Для студентов и преподавателей
            </span>
            <h2>Образовательный портал</h2>
            <p>Вход в информационную систему AVN КНАУ.</p>
            <PortalLink className="portal-entry">Перейти в AVN</PortalLink>
          </aside>
        </div>
      </section>
      <section className="faculty-overview">
        <div className="container editorial-grid">
          <div>
            <span className="section-label">Факультет</span>
            <h2>О нас</h2>
          </div>
          <div>
            <p className="overview-text">
              Факультет ветеринарной медицины КНАУ им. К.И. Скрябина.
            </p>
            <p className="muted overview-description">
              Информация о факультете, его миссии и руководстве.
            </p>
            <FacultyLinks />
          </div>
        </div>
      </section>
    </>
  )
}
