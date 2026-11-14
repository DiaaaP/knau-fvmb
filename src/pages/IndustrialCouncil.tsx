import { Breadcrumbs } from '../components/Layout'
import { council } from '../content/council'
import { ArrowLink } from '../components/ui'

export default function IndustrialCouncil() {
  return (
    <div className="container">
      <Breadcrumbs title={council.title} />
      <div className="page-heading">
        <span className="eyebrow">Факультет ветеринарной медицины</span>
        <h1>{council.title}</h1>
        <p className="page-description">{council.summary}</p>
      </div>
      <article className="council-page">
        <section className="council-purpose">
          <h2>Цель совета</h2>
          <p>{council.purpose}</p>
        </section>
        <section
          className="council-section"
          aria-labelledby="council-composition"
        >
          <div className="section-heading">
            <h2 id="council-composition">Предлагаемый состав</h2>
          </div>
          <p className="muted council-composition-note">
            Предлагается объединить представителей высшего образования,
            государственных органов и реального сектора экономики. Ниже
            приведены категории участников, а не утверждённый персональный
            состав совета.
          </p>
          <div className="council-groups">
            {council.groups.map((group, index) => (
              <section className="council-group" key={group.title}>
                <span className="council-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </section>
        <section className="council-section" aria-labelledby="council-tasks">
          <div className="section-heading">
            <h2 id="council-tasks">Основные задачи</h2>
          </div>
          <ul className="council-tasks">
            {council.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </section>
        <section className="council-partnership">
          <h2>Связь с практикой</h2>
          <p>{council.partnership}</p>
          <p>{council.conclusion}</p>
        </section>
        <div className="document-next">
          <ArrowLink to="/about">О факультете</ArrowLink>
          <ArrowLink to="/about/deans-office">Деканат</ArrowLink>
        </div>
      </article>
    </div>
  )
}
