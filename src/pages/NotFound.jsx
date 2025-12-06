import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const NotFound = () => {
  usePageMetadata('Page Not Found | Parmeet Singh Bhogal', 'The page you are looking for does not exist.')

  return (
    <>
      <header>
        <h1>
          <i className="fas fa-exclamation-triangle"></i>
          {' '}Page Not Found
        </h1>
        <p>The page you're looking for doesn't exist or may have been moved.</p>
      </header>

      <div className="container main-container text-center">
        <h2>
          <i className="fas fa-compass icon"></i>
          Let's get you back on track
        </h2>
        <p>
          Use the navigation bar to explore the site or click the button below to return to the homepage.
        </p>
        <Link to="/" className="btn-custom mt-3">
          <i className="fas fa-home"></i>
          {' '}Go Home
        </Link>
      </div>
    </>
  )
}

export default NotFound
