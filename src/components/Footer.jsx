import { profile } from '../data/site'

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>
        React + Vite · GitHub Pages ·{' '}
        <a href={profile.repo} target="_blank" rel="noreferrer">
          Source
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
