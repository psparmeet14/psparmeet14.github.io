import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
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
}

export default Layout
