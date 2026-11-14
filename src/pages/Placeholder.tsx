import { FileClock } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components/Layout'
import { ArrowLink, PortalLink } from '../components/ui'
import { placeholders } from '../content/site'

export function NotFound() {
  return (
    <section className="section">
      <div className="container placeholder-page">
        <span className="eyebrow">Страница не найдена</span>
        <h1>Такой страницы пока нет</h1>
        <p>Воспользуйтесь навигацией или вернитесь на главную.</p>
        <ArrowLink className="button button-primary" to="/">
          На главную
        </ArrowLink>
      </div>
    </section>
  )
}

export default function Placeholder() {
  const { pathname } = useLocation()
  const page = placeholders[pathname]
  if (!page) return <NotFound />
  return (
    <>
      <div className="container">
        <Breadcrumbs title={page.title} />
      </div>
      <section className="section">
        <div className="container placeholder-page">
          <span className="icon-tile">
            <FileClock size={28} />
          </span>
          <span className="eyebrow">Раздел прототипа</span>
          <h1>{page.title}</h1>
          <p className="lead">{page.description}</p>
          <div className="panel">
            <h2>Материалы готовятся</h2>
            <p>
              Дизайн и содержание этого раздела ещё не утверждены. Здесь будут
              представлены:
            </p>
            <ul>
              {page.missing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted">
              Сведения будут опубликованы после согласования с факультетом.
            </p>
          </div>
          <div className="button-row">
            <ArrowLink className="button button-outline" to="/">
              На главную
            </ArrowLink>
            <PortalLink className="button button-primary">
              Портал AVN
            </PortalLink>
          </div>
        </div>
      </section>
    </>
  )
}
