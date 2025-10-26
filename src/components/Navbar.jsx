import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', icon: 'fas fa-home' },
  { to: '/about', label: 'About', icon: 'fas fa-user' },
  { to: '/experience', label: 'Experience', icon: 'fas fa-briefcase' },
  { to: '/projects', label: 'Projects', icon: 'fas fa-code-branch' },
  { to: '/posts', label: 'Posts', icon: 'fas fa-pencil-alt' },
  { to: '/interests', label: 'Interests', icon: 'fas fa-heart' },
  { to: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
]

function Navbar() {
  const handleNavLinkClick = () => {
    const navbarNav = document.getElementById('navbarNav')
    if (!navbarNav) return

    const isExpanded = navbarNav.classList.contains('show')
    if (isExpanded) {
      const collapseElement = window.bootstrap?.Collapse.getInstance(navbarNav)
      if (collapseElement) {
        collapseElement.hide()
      }
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i className="fas fa-home icon"></i>
          Parmeet Singh
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map(({ to, label, icon }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                  to={to}
                  onClick={handleNavLinkClick}
                >
                  <i className={icon}></i>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
