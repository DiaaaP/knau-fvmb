import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Layout'
import { OfficeContacts } from '../components/Sections'
import { ArrowLink } from '../components/ui'
import { staff } from '../content/site'
import { NotFound } from './Placeholder'

export default function StaffProfile() {
  const { slug } = useParams()
  if (slug !== staff.slug) return <NotFound />
  return (
    <div className="container">
      <Breadcrumbs title={staff.name} profile />
      <div className="page-heading profile-heading">
        <p className="section-label">Деканат</p>
        <h1>{staff.name}</h1>
        <p className="page-description">{staff.role}</p>
      </div>
      <div className="profile-content">
        <section>
          <h2 className="section-label">Сведения о сотруднике</h2>
          <dl className="profile-facts">
            <div>
              <dt>Должность</dt>
              <dd>{staff.role}</dd>
            </div>
            <div>
              <dt>Учёная степень</dt>
              <dd>{staff.degree}</dd>
            </div>
            <div>
              <dt>Академический статус</dt>
              <dd>{staff.title}</dd>
            </div>
          </dl>
        </section>
        <aside className="profile-contact">
          <h2>Приёмная факультета</h2>
          <OfficeContacts />
        </aside>
      </div>
      <div className="profile-return">
        <ArrowLink to="/about/deans-office">Вернуться в деканат</ArrowLink>
      </div>
    </div>
  )
}
