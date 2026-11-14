import { AboutSidebar, Breadcrumbs } from '../components/Layout'
import { FacultyLinks } from '../components/Sections'
import { institution } from '../content/site'

export default function About() {
  return (
    <>
      <div className="container">
        <Breadcrumbs title="О факультете" />
        <div className="page-heading">
          <p className="section-label">{institution.university}</p>
          <h1>О факультете</h1>
        </div>
        <div className="document-grid">
          <AboutSidebar />
          <article className="document-body">
            <p className="document-lead">{institution.fullName}.</p>
            <p>
              На этой странице собраны разделы с информацией о миссии факультета
              и его руководстве.
            </p>
            <FacultyLinks />
          </article>
        </div>
      </div>
    </>
  )
}
