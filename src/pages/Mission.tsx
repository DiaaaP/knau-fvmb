import { AboutSidebar, Breadcrumbs } from '../components/Layout'
import { ArrowLink } from '../components/ui'
import { missionDraft } from '../content/site'

export default function Mission() {
  return (
    <div className="container">
      <Breadcrumbs title="Миссия" />
      <div className="page-heading">
        <p className="section-label">О факультете</p>
        <h1>Миссия факультета</h1>
      </div>
      <div className="document-grid">
        <AboutSidebar />
        <article className="document-body">
          <p className="document-status">
            Проект формулировки · на согласовании
          </p>
          <blockquote className="mission-quote">{missionDraft.text}</blockquote>
          <p className="document-note">
            Этот текст — проект. Официальная формулировка будет опубликована
            после утверждения факультетом.
          </p>
          <h2 className="content-heading">Направления работы</h2>
          <dl className="focus-list">
            {missionDraft.areas.map((item, index) => (
              <div key={item.title}>
                <dt>
                  <span>0{index + 1}</span>
                  {item.title}
                </dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
          <div className="document-next">
            <ArrowLink to="/about/deans-office">Деканат</ArrowLink>
          </div>
        </article>
      </div>
    </div>
  )
}
