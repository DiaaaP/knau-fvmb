import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dean, facultySections, institution, staff } from '../content/site'

export function FacultyLinks() {
  return (
    <nav className="faculty-links" aria-label="Информация о факультете">
      {facultySections.map((item, index) => (
        <Link className="faculty-link" key={item.to} to={item.to}>
          <span className="link-number">0{index + 1}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <ArrowUpRight size={24} strokeWidth={1.4} aria-hidden="true" />
        </Link>
      ))}
    </nav>
  )
}

export function OfficeContacts() {
  return (
    <address className="office-contacts">
      <a href={institution.phoneLink}>{institution.phone}</a>
      <a href={'mailto:' + institution.email}>{institution.email}</a>
    </address>
  )
}

export function StaffDirectory() {
  return (
    <div className="staff-directory">
      <article className="directory-row">
        <span className="directory-label">Руководитель</span>
        <div>
          <h2>{dean.role}</h2>
          <p>{dean.degree}</p>
          <p className="muted">{dean.facultyReference}</p>
        </div>
        <a className="text-link" href={institution.phoneLink}>
          Приёмная
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </article>
      <article className="directory-row">
        <span className="directory-label">{staff.role}</span>
        <div>
          <h2>
            <Link to={staff.route}>{staff.name}</Link>
          </h2>
          <p>{staff.degree}, исполняющий обязанности доцента</p>
        </div>
        <Link className="text-link" to={staff.route}>
          Профиль сотрудника
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </article>
    </div>
  )
}
