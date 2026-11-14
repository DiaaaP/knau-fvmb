import { GraduationCap } from 'lucide-react'
import { institution } from '../content/site'
import {
  AcademicProfile,
  ContactSection,
  Leadership,
  ServiceLinks,
} from '../components/Sections'
import {
  ArrowLink,
  EmptyPanel,
  MediaPlaceholder,
  PortalLink,
  SectionHeading,
} from '../components/ui'

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
              Ветеринарное образование, наука и клиническая практика
            </p>
            <div className="button-row">
              <ArrowLink className="button button-primary" to="/about">
                О факультете
              </ArrowLink>
              <PortalLink className="button button-outline">
                <GraduationCap size={19} />
                Портал AVN
              </PortalLink>
            </div>
            <div className="hero-fields">
              <div>
                <strong>Образование</strong>
                <span>Подготовка специалистов</span>
              </div>
              <div>
                <strong>Наука</strong>
                <span>Исследования</span>
              </div>
              <div>
                <strong>Практика</strong>
                <span>Клиническое обучение</span>
              </div>
            </div>
          </div>
          <figure className="hero-media">
            <MediaPlaceholder caption="Учебно-клиническая база факультета" />
            <figcaption>
              <GraduationCap size={23} aria-hidden="true" />
              <div>
                <strong>Образование и практическая подготовка</strong>
                <span>Фотография будет добавлена после согласования</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="prototype-note">
        <div className="container">
          <span>Прототип</span>
          {institution.prototype}
        </div>
      </div>
      <section className="section section-soft">
        <div className="container">
          <AcademicProfile />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Leadership />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <ServiceLinks />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Академическая структура"
            title="Кафедры факультета"
            action={<ArrowLink to="/departments">К разделу кафедр</ArrowLink>}
          />
          <EmptyPanel title="Структура факультета ожидает подтверждения">
            Утверждённый перечень будет добавлен после согласования.
          </EmptyPanel>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Информационная лента"
            title="Новости и объявления"
          />
          <div className="three-column">
            {['Новости факультета', 'Объявления деканата', 'Научная жизнь'].map(
              (title) => (
                <EmptyPanel key={title} title={title}>
                  Материалы ещё не опубликованы. Здесь появятся согласованные
                  сообщения факультета.
                </EmptyPanel>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </>
  )
}
