import { AboutSidebar, Breadcrumbs } from '../components/Layout'
import { ArrowLink } from '../components/ui'
import { facultyMission } from '../content/site'
import { asset } from '../content/assets'

export default function Mission() {
  return (
    <div className="container">
      <Breadcrumbs title="Миссия" />
      <div className="page-heading">
        <span className="eyebrow">О факультете</span>
        <h1>Миссия факультета ветеринарной медицины</h1>
      </div>
      <div className="document-grid">
        <AboutSidebar />
        <article className="document-body">
          <blockquote className="mission-quote">
            {facultyMission.motto}
          </blockquote>
          <img
            className="content-photo"
            src={asset('faculty-laboratory.webp')}
            alt="Занятие в лаборатории факультета"
            width={576}
            height={383}
          />
          {facultyMission.paragraphs.map((paragraph) => (
            <p className="source-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="document-next">
            <ArrowLink to="/about/deans-office">Деканат</ArrowLink>
            <ArrowLink to="/departments">Кафедры</ArrowLink>
          </div>
        </article>
      </div>
    </div>
  )
}
