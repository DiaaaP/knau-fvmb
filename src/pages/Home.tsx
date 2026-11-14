import { GraduationCap } from 'lucide-react'
import { institution } from '../content/site'
import { FacultyLinks } from '../components/Sections'
import {
  ArrowLink,
  FacultyImagePlaceholder,
  PortalLink,
} from '../components/ui'
import { council } from '../content/council'

export default function Home() {
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
            <p className="hero-description">
              Ветеринарное образование и клиническая практика
            </p>
            <div className="button-row">
              <ArrowLink className="button button-primary" to="/about">
                О факультете
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
            <FacultyImagePlaceholder />
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
