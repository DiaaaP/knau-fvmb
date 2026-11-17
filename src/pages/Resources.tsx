import { Download, ExternalLink } from 'lucide-react'
import { Breadcrumbs } from '../components/Layout'
import { OfficeContacts } from '../components/Sections'
import { ArrowLink, PortalLink } from '../components/ui'
import { usePublishedContent } from '../content/PublishedContent'
import { admissions } from '../content/admissions'

const content = {
  applicants: { title: 'Абитуриентам', subtitle: 'Информация для поступающих' },
  students: {
    title: 'Студентам',
    subtitle: 'Образовательные ресурсы факультета',
  },
  documents: { title: 'Документы', subtitle: 'Документы факультета' },
  rector: { title: 'Обращение ректора', subtitle: 'Абитуриентам' },
} as const

function AdmissionsInfo() {
  return (
    <>
      <section className="resource-panel admissions-program">
        <h2>Специальность «{admissions.program}»</h2>
        <dl>
          <div>
            <dt>Код специальности</dt>
            <dd>{admissions.code}</dd>
          </div>
          <div>
            <dt>Уровень подготовки</dt>
            <dd>{admissions.degree}</dd>
          </div>
        </dl>
        <a
          className="source-link"
          href={admissions.programSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          Отчёт об образовательной программе (PDF)
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </section>
      <section>
        <h2>Условия поступления и документы</h2>
        <p>
          Сроки подачи, требования и список документов проверяйте для текущего
          набора в разделе «Приём в ВУЗ» на сайте министерства. Там же есть
          ссылка на систему «Абитуриент онлайн».
        </p>
        <a
          className="button button-primary"
          href={admissions.ministry}
          target="_blank"
          rel="noopener noreferrer"
        >
          Информация о приёме
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </section>
      <section>
        <h2>Материалы КНАУ</h2>
        <ul className="resource-links">
          <li>
            <ArrowLink to="/about/documents">Документы факультета</ArrowLink>
          </li>
          <li>
            <ArrowLink to="/applicants/rector-address">
              Обращение ректора
            </ArrowLink>
          </li>
        </ul>
      </section>
    </>
  )
}

export default function Resources({
  section,
}: {
  section: keyof typeof content
}) {
  const page = content[section]
  const { documents } = usePublishedContent()
  return (
    <div className="container resource-page">
      <Breadcrumbs title={page.title} />
      <div className="page-heading">
        <span className="eyebrow">{page.subtitle}</span>
        <h1>{page.title}</h1>
      </div>
      <div className="resource-content">
        {section === 'applicants' && <AdmissionsInfo />}
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
            {documents.length ? (
              <ul className="document-downloads">
                {documents.map(({ id, title }) => (
                  <li key={id}>
                    <span>{title}</span>
                    <a
                      className="button button-outline"
                      href={`/api/documents/${id}`}
                      download
                      aria-label={`Скачать PDF: ${title}`}
                    >
                      <Download size={17} aria-hidden="true" />
                      Скачать PDF
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">
                Перечень документов и файлы дополняются. По вопросам получения
                документов можно связаться с факультетом.
              </p>
            )}
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
          <h2>
            {section === 'applicants'
              ? 'Вопросы факультету'
              : 'Связь с факультетом'}
          </h2>
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
