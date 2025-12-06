import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => (
  <div className="app-shell">
    <aside className="app-sidebar">
      <Navbar />
    </aside>

    <div className="app-main">
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
)

export default Layout
