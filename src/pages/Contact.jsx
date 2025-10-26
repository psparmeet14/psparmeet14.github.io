import Navbar from '../components/Navbar'
import { usePageMetadata } from '../hooks/usePageMetadata'

const Contact = () => {
  usePageMetadata(
    'Contact | Parmeet Singh Bhogal',
    'Get in touch with Parmeet Singh Bhogal - Senior Software Engineer.'
  )

  return (
    <>
      <header>
        <h1>
          <i className="fas fa-envelope"></i>
          {' '}Get in Touch
        </h1>
        <p>Let's Connect and Collaborate</p>
      </header>

      <Navbar />

      <div className="container main-container">
        <div className="welcome-section">
          <h2>
            <i className="fas fa-handshake icon"></i>
            Let's Connect
          </h2>
          <p className="lead">
            I'm always open to meaningful conversations about software engineering, architecture, personal growth, or potential collaborations. Whether you want to discuss a project, share ideas, or just say hello, feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope fa-4x mb-3" style={{ color: '#3498db' }}></i>
                <h3>Email</h3>
                <p className="card-text">
                  For professional inquiries, collaboration opportunities, or detailed discussions.
                </p>
                <a href="mailto:psparmeet14@gmail.com" className="btn-custom mt-3">
                  <i className="fas fa-paper-plane"></i>
                  {' '}Send Email
                </a>
                <p className="mt-3">
                  <strong>psparmeet14@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fab fa-linkedin fa-4x mb-3" style={{ color: '#0077b5' }}></i>
                <h3>LinkedIn</h3>
                <p className="card-text">
                  Connect professionally, follow my posts, or reach out for networking.
                </p>
                <a
                  href="https://linkedin.com/in/parmeet-s-bhogal-6a259715a"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-custom mt-3"
                >
                  <i className="fab fa-linkedin"></i>
                  {' '}Connect on LinkedIn
                </a>
                <p className="mt-3">
                  <strong>Parmeet S. Bhogal</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fab fa-github fa-4x mb-3" style={{ color: '#333' }}></i>
                <h3>GitHub</h3>
                <p className="card-text">Check out my code, repositories, and open-source contributions.</p>
                <a
                  href="https://github.com/psparmeet14"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-custom mt-3"
                >
                  <i className="fab fa-github"></i>
                  {' '}Visit GitHub Profile
                </a>
                <p className="mt-3">
                  <strong>@psparmeet14</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-5 mb-4">
          <i className="fas fa-comments icon"></i>
          What I'm Open To
        </h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-briefcase icon"></i>
                  Professional Opportunities
                </h4>
                <p className="card-text">
                  Discussing interesting projects, consulting opportunities, or potential collaborations in backend development, system architecture, or technical leadership roles.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-users icon"></i>
                  Networking
                </h4>
                <p className="card-text">
                  Connecting with fellow software engineers, architects, or anyone passionate about clean code, software craftsmanship, and continuous learning.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-lightbulb icon"></i>
                  Knowledge Sharing
                </h4>
                <p className="card-text">
                  Discussing technical topics, sharing insights on software architecture, or exchanging ideas about personal growth and productivity systems.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-question-circle icon"></i>
                  Questions &amp; Advice
                </h4>
                <p className="card-text">
                  If you're starting your journey in software engineering or need perspective on career development, I'm happy to share my experiences and insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-5 p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(231, 76, 60, 0.1))',
            borderRadius: '15px',
          }}
        >
          <h3 className="mb-3">
            <i className="fas fa-clock icon"></i>
            Response Time
          </h3>
          <p>
            I typically respond to emails and LinkedIn messages within <strong>24-48 hours</strong>. I value meaningful conversations and prefer to give thoughtful responses rather than quick, generic replies.
          </p>
          <p className="mb-0">
            <strong>Note:</strong>
            {' '}This portfolio website and its content represent my intellectual property. If you're interested in collaborating, discussing my work, or have any questions, please reach out through the channels above.
          </p>
        </div>

        <div className="welcome-section mt-5">
          <h3>Looking Forward to Connecting</h3>
          <p>
            Whether you want to discuss a technical challenge, share ideas about software architecture, talk about fitness and self-growth, or explore collaboration opportunities, I'd love to hear from you. Let's build something meaningful together.
          </p>
          <div className="social-links mt-4">
            <a href="mailto:psparmeet14@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
              {' '}Email Me
            </a>
            <a
              href="https://linkedin.com/in/parmeet-s-bhogal-6a259715a"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
              {' '}LinkedIn
            </a>
            <a
              href="https://github.com/psparmeet14"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
              {' '}GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
