import { CalendarDays, FileText, UsersRound } from 'lucide-react'
import { Breadcrumbs } from '../components/Layout'
import { Leadership, ServiceLinks } from '../components/Sections'
import { DraftNotice, EmptyPanel, SectionHeading } from '../components/ui'

export default function DeanOffice() {
  return (
    <>
      <div className="container">
        <Breadcrumbs title="Деканат" />
      </div>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Академическое управление</span>
          <h1>Деканат и руководство факультета</h1>
          <p>Руководство, сотрудники и организация приёма</p>
          <a
            className="button button-primary"
            href="#reception"
            onClick={(event) => {
              event.preventDefault()
              document
                .getElementById('reception')
                ?.scrollIntoView({ behavior: 'smooth' })
              document
                .getElementById('reception')
                ?.focus({ preventScroll: true })
            }}
          >
            <CalendarDays size={18} />
            Информация о приёме
          </a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <DraftNotice>
            В прототипе показана структура деканата. Сведения о персонале и
            графики будут дополнены после согласования.
          </DraftNotice>
          <Leadership full />
        </div>
      </section>
      <section className="section section-soft" id="reception" tabIndex={-1}>
        <div className="container">
          <SectionHeading
            eyebrow="Организация приёма"
            title="График приёма граждан и студентов"
          />
          <div className="schedule-table">
            <table>
              <caption className="sr-only">
                График приёма — сведения ожидают подтверждения
              </caption>
              <thead>
                <tr>
                  <th scope="col">Подразделение</th>
                  <th scope="col">Кабинет</th>
                  <th scope="col">Дни и часы</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Декан факультета',
                  'Учебная работа',
                  'Канцелярия деканата',
                ].map((title) => (
                  <tr key={title}>
                    <th scope="row">{title}</th>
                    <td>Уточняется</td>
                    <td>Ожидает подтверждения</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="two-column reception-panels">
            <article className="panel">
              <FileText className="panel-icon" />
              <h3>Заявления и документы</h3>
              <p className="muted">
                Регламенты, бланки и сроки рассмотрения будут опубликованы после
                согласования.
              </p>
            </article>
            <article className="panel">
              <UsersRound className="panel-icon" />
              <h3>Обращение в деканат</h3>
              <p className="muted">
                Электронная приёмная в прототипе пока недоступна. Официальный
                способ связи появится после подтверждения контактов.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <EmptyPanel title="Состав деканата уточняется">
            Полный список сотрудников и сведения о них будут опубликованы после
            согласования с факультетом.
          </EmptyPanel>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Разделы и сервисы" />
          <ServiceLinks heading={false} compact />
        </div>
      </section>
    </>
  )
}
