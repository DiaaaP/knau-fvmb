import { ArrowLink } from '../components/ui'

export function NotFound() {
  return (
    <section className="container not-found">
      <p className="section-label">Страница не найдена</p>
      <h1>Такой страницы пока нет</h1>
      <p>Воспользуйтесь навигацией или вернитесь на главную.</p>
      <ArrowLink to="/">На главную</ArrowLink>
    </section>
  )
}
