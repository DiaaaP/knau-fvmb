import { HashRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Mission from '../pages/Mission'
import DeanOffice from '../pages/DeanOffice'
import StaffProfile from '../pages/StaffProfile'
import Placeholder, { NotFound } from '../pages/Placeholder'
import { placeholders } from '../content/site'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/mission" element={<Mission />} />
          <Route path="about/deans-office" element={<DeanOffice />} />
          <Route path="about/deans-office/:slug" element={<StaffProfile />} />
          {Object.keys(placeholders).map((path) => (
            <Route key={path} path={path} element={<Placeholder />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
