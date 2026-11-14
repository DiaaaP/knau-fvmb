import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Layout'
import {
  ArrowLink,
  DraftNotice,
  EmptyPanel,
  MediaPlaceholder,
  PortalLink,
  SectionHeading,
} from '../components/ui'
import { profileTopics, staff } from '../content/site'
import { NotFound } from './Placeholder'

export default function StaffProfile() {
  const { slug } = useParams()
  if (slug !== staff.slug) return <NotFound />
  return (
    <>
      <div className="container">
        <Breadcrumbs title={staff.name} profile />
      </div>
      <section className="section">
        <div className="container">
          <ArrowLink to="/about/deans-office">Вернуться в деканат</ArrowLink>
          <div className="profile-grid">
            <aside>
              <MediaPlaceholder portrait caption="Фотография сотрудника" />
              <div className="profile-sidebar panel">
                <span className="eyebrow">Карточка сотрудника</span>
                <h2>{staff.name}</h2>
                <p>{staff.draftRole}</p>
                <DraftNotice>{staff.note}</DraftNotice>
                <PortalLink className="button button-outline">
                  Портал AVN
                </PortalLink>
              </div>
            </aside>
            <div className="profile-main">
              <span className="eyebrow">Руководство деканата</span>
              <h1>{staff.name}</h1>
              <p className="lead">{staff.draftRole}</p>
              <DraftNotice>
                Должность и перечень обязанностей требуют подтверждения.
              </DraftNotice>
              <section>
                <SectionHeading
                  title="Курируемые вопросы"
                  description="Перечень обязанностей на согласовании"
                />
                <div className="profile-topics">
                  {profileTopics.map((topic, i) => (
                    <article key={topic.title}>
                      <span className="pillar-number">0{i + 1}</span>
                      <div>
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              <section>
                <SectionHeading title="Биографическая справка и образование" />
                <EmptyPanel>
                  Подтверждённая биография и сведения об образовании ещё не
                  предоставлены.
                </EmptyPanel>
              </section>
              <section>
                <SectionHeading title="Научно-педагогическая деятельность" />
                <EmptyPanel>
                  Курсы, научные интересы и публикации будут добавлены после
                  согласования.
                </EmptyPanel>
              </section>
              <section>
                <SectionHeading title="Приём и контактная информация" />
                <EmptyPanel>
                  Телефон, электронная почта, кабинет и часы приёма ожидают
                  подтверждения. Онлайн-запись пока недоступна.
                </EmptyPanel>
                <ArrowLink to="/contacts">Контакты факультета</ArrowLink>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
