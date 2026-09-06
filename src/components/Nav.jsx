import { useEffect, useState } from 'react'
import { profile } from '../data/site'
import { ArrowUpRight, MenuIcon } from './Icons'

const Nav = ({ sections }) => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="nav">
      <div className="container nav__bar">
        <a href="#top" className="nav__brand" onClick={close}>
          {profile.name}
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <MenuIcon open={open} />
        </button>

        <nav id="site-menu" className={`nav__menu${open ? ' is-open' : ''}`} aria-label="Sections">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav__link" onClick={close}>
              {label}
            </a>
          ))}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="button button--ghost button--small"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <ArrowUpRight />
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Nav
