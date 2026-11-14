import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Layout'
import { OfficeContacts } from '../components/Sections'
import { ArrowLink } from '../components/ui'
import { staff, dean } from '../content/site'
import { asset } from '../content/assets'
import { NotFound } from './Placeholder'

export default function StaffProfile() {
  const { slug } = useParams()
  const isDean = slug === 'dean'
  if (!isDean && slug !== staff.slug) return <NotFound />
  const person = isDean
    ? {
        name: dean.role,
        role: dean.facultyReference,
        degree: dean.degree,
        title: '',
        image: dean.image,
      }
    : staff
  return (
    <div className="container">
      <Breadcrumbs title={person.name} profile />
      <div className="page-heading">
        <span className="eyebrow">Деканат</span>
        <h1>{person.name}</h1>
        <p className="page-description">{person.role}</p>
      </div>
      <div className="person-profile">
        <img
          className={'person-portrait' + (isDean ? ' dean-portrait' : '')}
          src={asset(person.image)}
          alt={person.name}
          width={isDean ? 589 : 537}
          height={isDean ? 393 : 366}
        />
        <div>
          <dl className="profile-facts">
            <div>
              <dt>Должность</dt>
              <dd>{isDean ? dean.role : staff.role}</dd>
            </div>
            <div>
              <dt>Учёная степень</dt>
              <dd>{person.degree}</dd>
            </div>
            {person.title && (
              <div>
                <dt>Академический статус</dt>
                <dd>{person.title}</dd>
              </div>
            )}
          </dl>
          {!isDean && (
            <section className="person-contact">
              <h2>Контакты</h2>
              <address className="office-contacts">
                <a href={staff.phoneLink}>{staff.phone}</a>
                <a href={'mailto:' + staff.email}>{staff.email}</a>
              </address>
            </section>
          )}
          <section className="person-contact">
            <h2>Приёмная факультета</h2>
            <OfficeContacts />
          </section>
        </div>
      </div>
      <div className="profile-return">
        <ArrowLink to="/about/deans-office">Вернуться в деканат</ArrowLink>
      </div>
    </div>
  )
}
