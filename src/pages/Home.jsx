import { usePageMetadata } from '../hooks/usePageMetadata'

const Home = () => {
  usePageMetadata(
    'Parmeet Singh Bhogal | Software Engineer',
    'Portfolio of Parmeet Singh Bhogal - Software Engineer specializing in Java, Spring Boot, Microservices, and backend development with 7+ years of experience.'
  )

  return (
    <>
      <header>
        <div className="profile-section">
          <div className="profile-photo">
            <img
              src="/profile-photo.jpg"
              alt="Parmeet Singh Bhogal"
              className="profile-photo"
            />
          </div>
          <div>
            <h1>Parmeet Singh Bhogal</h1>
            <p>
              <i className="fas fa-code icon"></i>
              Building resilient backend platforms for HR at scale
            </p>
            <p>
              <i className="fas fa-seedling icon"></i>
              Clean architecture • Workflow automation • System clarity
            </p>
          </div>
        </div>
      </header>

      <div className="container main-container">
        <div className="home-hero-grid">
          <div className="home-hero__primary">
            <h2>Welcome to My Digital Space</h2>
            <p className="lead">
              I design calm, scalable backend systems for Core HR products—translating complex onboarding and workflow
              requirements into dependable services that teams can ship with confidence.
            </p>
            <p>
              I care about technical clarity, predictable releases, and documenting the why behind every architectural call.
              This site captures my work, principles, and ongoing experiments.
            </p>
          </div>
          <div className="home-hero__metrics">
            <div className="home-hero__metric">
              <span>Currently</span>
              <strong>Senior Engineer · CatalystOne</strong>
            </div>
            <div className="home-hero__metric">
              <span>Focus</span>
              <strong>Core HR &amp; Workflow Automation</strong>
            </div>
            <div className="home-hero__metric">
              <span>Toolbox</span>
              <strong>Java · Spring · Azure</strong>
            </div>
            <div className="home-hero__metric">
              <span>Mindset</span>
              <strong>Clean Code + Fitness Discipline</strong>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <h2>Focus Areas</h2>
          <p className="lead">
            A quick snapshot of where I create the most leverage inside product engineering teams.
          </p>
        </section>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-microchip fa-3x mb-3" style={{ color: '#3498db' }}></i>
                <h3 className="card-title">Backend Systems</h3>
                <p className="card-text">
                  Designing API-first services with layered architecture, strong boundaries, and healthy monitoring so
                  change is predictable.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-project-diagram fa-3x mb-3" style={{ color: '#e74c3c' }}></i>
                <h3 className="card-title">Microservice Transition</h3>
                <p className="card-text">
                  Guiding teams through monolith-to-microservice journeys—safeguarding business logic while improving
                  deployment agility.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-cogs fa-3x mb-3" style={{ color: '#2ecc71' }}></i>
                <h3 className="card-title">Workflow Automation</h3>
                <p className="card-text">
                  Automating onboarding and compliance flows so IT, payroll, and managers move in sync when a person joins
                  or transitions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <h2>Recent Impact</h2>
          <div className="home-impact-grid">
            <div className="home-impact-card">
              <h4>Workflow dashboard</h4>
              <p>13K+ employee records optimized to load in 2 seconds through partial fetch, caching, and SQL tuning.</p>
            </div>
            <div className="home-impact-card">
              <h4>Monolith → Microservice</h4>
              <p>Re-architected a core HR module using Spring Boot, clear API contracts, and multi-env deployments.</p>
            </div>
            <div className="home-impact-card">
              <h4>Collaboration systems</h4>
              <p>Defined onboarding workflows that align IT, payroll, and managers via automated tasks and alerts.</p>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <h2>Operating Principles</h2>
          <ul className="about-summary-list">
            <li>Design from the business process inward—clarity beats cleverness.</li>
            <li>Automate observability and feedback loops so issues surface before users notice.</li>
            <li>Invest in documentation and pairing to keep teams aligned as systems evolve.</li>
          </ul>
        </section>

        <div className="cta-panel">
          <h3>Let’s build calmer systems.</h3>
          <p>Open to discussing backend architecture, workflow automation, or coaching teams on clean delivery.</p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/parmeet-s-bhogal-6a259715a"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/psparmeet14"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
              View GitHub
            </a>
            <a href="mailto:psparmeet14@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
