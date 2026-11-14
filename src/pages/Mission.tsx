import { Leaf, Microscope, ShieldCheck } from 'lucide-react'
import { Breadcrumbs } from '../components/Layout'
import { ArrowLink, DraftNotice, SectionHeading } from '../components/ui'
import { missionDraft } from '../content/site'

export default function Mission() {
  return (
    <>
      <div className="container">
        <Breadcrumbs title="Миссия" />
      </div>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Миссия и ценности</span>
          <h1>Миссия и стратегическое видение факультета</h1>
          <p>Образование, исследования и ответственность перед обществом</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <DraftNotice>
            Проект формулировки миссии. Ожидает утверждения факультетом.
          </DraftNotice>
          <div className="mission-statement">
            <span className="eyebrow">Проект миссии</span>
            <blockquote>{missionDraft.text}</blockquote>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Проект направлений"
            title="Пять опорных направлений"
          />
          <div className="pillar-list">
            {missionDraft.pillars.map((item, i) => (
              <article key={item.title} className="pillar">
                <span className="pillar-number">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="draft-tag">Проект</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container one-health">
          <div>
            <span className="eyebrow">Междисциплинарный подход</span>
            <h2>«Единое здоровье»</h2>
            <p>Взаимосвязь здоровья животных, человека и окружающей среды.</p>
            <DraftNotice />
          </div>
          <div
            className="health-diagram"
            role="img"
            aria-label="Животные, человек и окружающая среда связаны общей концепцией здоровья"
          >
            <span>
              <ShieldCheck />
              Животные
            </span>
            <span>
              <Microscope />
              Человек
            </span>
            <span>
              <Leaf />
              Среда
            </span>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Проект развития"
            title="Стратегическое видение"
          />
          <DraftNotice />
          <div className="three-column">
            {missionDraft.strategy.map((item, i) => (
              <article className="panel strategy-card" key={item.title}>
                <span className="pillar-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Фундаментальные ценности" />
          <div className="four-column">
            {missionDraft.values.map((value) => (
              <article className="value-item" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container related-row">
          <div>
            <span className="eyebrow">Узнать больше</span>
            <h2>Познакомьтесь с факультетом</h2>
          </div>
          <div className="button-row">
            <ArrowLink className="button button-outline" to="/about">
              О факультете
            </ArrowLink>
            <ArrowLink
              className="button button-primary"
              to="/about/deans-office"
            >
              Деканат
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  )
}
