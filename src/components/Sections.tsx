import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dean, facultySections, institution, staff } from '../content/site'
import { asset } from '../content/assets'

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
        <div className="directory-details">
          <Link to={dean.route}>
            <img
              className="directory-portrait"
              src={asset(dean.image)}
              alt={dean.role}
              width={589}
              height={393}
            />
          </Link>
          <div>
            <h2>{dean.role}</h2>
            <p>{dean.degree}</p>
            <p className="muted">{dean.facultyReference}</p>
          </div>
        </div>
        <Link className="text-link" to={dean.route}>
          Подробнее о декане
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </article>
      <article className="directory-row">
        <span className="directory-label">{staff.role}</span>
        <div className="directory-details">
          <Link to={staff.route}>
            <img
              className="directory-portrait"
              src={asset(staff.image)}
              alt={staff.name}
              width={537}
              height={366}
            />
          </Link>
          <div>
            <h2>
              <Link to={staff.route}>{staff.name}</Link>
            </h2>
            <p>{staff.degree}, исполняющий обязанности доцента</p>
          </div>
        </div>
        <Link className="text-link" to={staff.route}>
          Профиль сотрудника
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </article>
    </div>
  )
}
