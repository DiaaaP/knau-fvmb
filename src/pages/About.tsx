import { AboutSidebar, Breadcrumbs } from '../components/Layout'
import { FacultyLinks } from '../components/Sections'
import { institution, facultyMission } from '../content/site'
import { departments, departmentPath } from '../content/departments'
import { ArrowLink } from '../components/ui'

export default function About() {
  return (
    <div className="container">
      <Breadcrumbs title="О факультете" />
      <div className="page-heading">
        <span className="eyebrow">{institution.university}</span>
        <h1>О факультете</h1>
      </div>
      <div className="document-grid">
        <AboutSidebar />
        <article className="document-body">
          <p className="document-lead">{institution.fullName}.</p>
          {facultyMission.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <FacultyLinks />
          <h2 className="content-heading">Кафедры факультета</h2>
          <ul className="department-links">
            {departments.map((department) => (
              <li key={department.slug}>
                <ArrowLink to={departmentPath(department)}>
                  {department.name}
                </ArrowLink>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
