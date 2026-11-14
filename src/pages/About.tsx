import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react'
import { Breadcrumbs } from '../components/Layout'
import { ServiceLinks } from '../components/Sections'
import {
  ArrowLink,
  DraftNotice,
  EmptyPanel,
  MediaPlaceholder,
  SectionHeading,
} from '../components/ui'
import { institution, missionDraft } from '../content/site'

export default function About() {
  const icons = [BookOpen, GraduationCap, HeartHandshake, FlaskConical]
  return (
    <>
      <div className="container">
        <Breadcrumbs title="О факультете" />
      </div>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Академический профиль</span>
          <h1>О факультете ветеринарной медицины и биотехнологии</h1>
          <p>{institution.university}</p>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <div className="prose">
            <h2>Образование, наука и клиническая практика</h2>
            <p>{institution.fullName}.</p>
            <p className="muted">
              История факультета, сведения об образовательных программах,
              исследованиях и инфраструктуре будут дополнены утверждёнными
              материалами.
            </p>
            <div className="mission-teaser">
              <span className="eyebrow">Миссия факультета</span>
              <h3>Здоровье животных, человека и окружающей среды</h3>
              <DraftNotice />
              <ArrowLink to="/about/mission">Миссия и ценности</ArrowLink>
            </div>
          </div>
          <MediaPlaceholder caption="Фотография факультета" />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Принципы" title="Ценности факультета" />
          <DraftNotice />
          <div className="four-column">
            {missionDraft.values.map((value, i) => {
              const Icon = icons[i]
              return (
                <article className="panel" key={value.title}>
                  <span className="icon-tile">
                    <Icon size={24} />
                  </span>
                  <h3>{value.title}</h3>
                  <p className="muted">{value.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="История"
            title="Исторические вехи развития факультета"
          />
          <EmptyPanel title="Историческая справка готовится">
            Даты, события и архивные материалы будут добавлены после
            подтверждения факультетом.
          </EmptyPanel>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Учебная среда"
            title="Инфраструктура и лаборатории"
          />
          <div className="two-column">
            <MediaPlaceholder caption="Клиническая база" />
            <MediaPlaceholder caption="Лаборатории факультета" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Связанные разделы и сервисы" />
          <ServiceLinks heading={false} compact />
        </div>
      </section>
    </>
  )
}
