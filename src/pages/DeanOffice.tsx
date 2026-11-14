import { Breadcrumbs } from '../components/Layout'
import { OfficeContacts, StaffDirectory } from '../components/Sections'
import { institution } from '../content/site'

export default function DeanOffice() {
  return (
    <div className="container">
      <Breadcrumbs title="Деканат" />
      <div className="page-heading">
        <p className="section-label">{institution.university}</p>
        <h1>Деканат</h1>
        <p className="page-description">
          Руководство факультета ветеринарной медицины
        </p>
      </div>
      <StaffDirectory />
      <section className="office-section">
        <h2>Приёмная факультета</h2>
        <OfficeContacts />
      </section>
    </div>
  )
}
