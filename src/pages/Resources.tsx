import { Breadcrumbs } from '../components/Layout'
import { OfficeContacts } from '../components/Sections'
import { ArrowLink, PortalLink } from '../components/ui'

const content = {
  applicants: { title: 'Абитуриентам', subtitle: 'Информация для поступающих' },
  students: {
    title: 'Студентам',
    subtitle: 'Образовательные ресурсы факультета',
  },
  documents: { title: 'Документы', subtitle: 'Документы факультета' },
  rector: { title: 'Обращение ректора', subtitle: 'Абитуриентам' },
} as const

export default function Resources({
  section,
}: {
  section: keyof typeof content
}) {
  const page = content[section]
  return (
    <div className="container">
      <Breadcrumbs title={page.title} />
      <div className="page-heading">
        <span className="eyebrow">{page.subtitle}</span>
        <h1>{page.title}</h1>
      </div>
      <div className="resource-content">
        {section === 'applicants' && (
          <section>
            <h2>Обращение ректора</h2>
            <ArrowLink to="/applicants/rector-address">
              Перейти к обращению
            </ArrowLink>
          </section>
        )}
        {section === 'students' && (
          <section className="resource-panel">
            <h2>Образовательный портал</h2>
            <p>Информационная система AVN КНАУ.</p>
            <PortalLink className="button button-primary">
              Открыть портал AVN
            </PortalLink>
          </section>
        )}
        {section === 'documents' && (
          <section>
            <h2>Документы факультета</h2>
            <p className="muted">
              Перечень документов и файлы дополняются. По вопросам получения
              документов можно связаться с факультетом.
            </p>
          </section>
        )}
        {section === 'rector' && (
          <section>
            <h2>Обращение к абитуриентам</h2>
            <p className="muted">Полный текст обращения будет добавлен.</p>
            <ArrowLink to="/applicants">Абитуриентам</ArrowLink>
          </section>
        )}
        <section>
          <h2>Связь с факультетом</h2>
          <OfficeContacts />
        </section>
        <div className="document-next">
          <ArrowLink to="/about">О факультете</ArrowLink>
          <ArrowLink to="/departments">Кафедры</ArrowLink>
        </div>
      </div>
    </div>
  )
}
