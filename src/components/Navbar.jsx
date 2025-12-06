import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', icon: 'fas fa-home' },
  { to: '/about', label: 'About', icon: 'fas fa-user' },
  { to: '/experience', label: 'Experience', icon: 'fas fa-briefcase' },
  { to: '/projects', label: 'Projects', icon: 'fas fa-code-branch' },
  { to: '/posts', label: 'Posts', icon: 'fas fa-pencil-alt' },
  { to: '/books', label: 'Books', icon: 'fas fa-book' },
  { to: '/interests', label: 'Interests', icon: 'fas fa-heart' },
  { to: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
]

function Navbar() {
  return (
    <nav className="side-nav">
      <div className="side-nav__brand">
        <NavLink to="/" className="side-nav__title">
          <i className="fas fa-home icon" aria-hidden="true"></i>
          Parmeet Singh
        </NavLink>
        <p className="side-nav__subtitle">Software Engineer & Storyteller</p>
      </div>

      <ul className="side-nav__links">
        {navLinks.map(({ to, label, icon }) => (
          <li key={to}>
            <NavLink
              end={to === '/'}
              to={to}
              className={({ isActive }) =>
                `side-nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              <i className={`${icon} icon`} aria-hidden="true"></i>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="side-nav__footer">
        <p>Need something specific?</p>
        <NavLink to="/contact" className="side-nav__cta">
          <i className="fas fa-paper-plane"></i>
          Contact Me
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
