import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const About = () => {
  usePageMetadata(
    'About Me | Parmeet Singh Bhogal',
    "Learn more about Parmeet Singh Bhogal's journey as a software engineer and personal growth enthusiast."
  )

  return (
    <>
      <div className="container main-container">
        <div className="about-hero">
          <div className="about-hero__photo">
            <img
              src="/profile-photo.jpg"
              alt="Parmeet Singh Bhogal"
              className="about-hero__photo-img"
            />
          </div>
          <div className="about-hero__content">
            <p className="about-hero__eyebrow">Backend Engineer • Systems Thinker</p>
            <h1 className="about-hero__title">About Me</h1>
            <p className="about-hero__subtitle">Exploring the intersection of code, philosophy, and growth</p>

            <div className="about-hero__badge-row">
              <span className="about-hero__badge">7+ Years Experience</span>
              <span className="about-hero__badge">Core HR Automation</span>
              <span className="about-hero__badge">Clean Architecture Advocate</span>
            </div>

            <p className="lead">
              <span className="text-highlight">Senior Software Engineer</span> with{' '}
              <span className="text-highlight">7+ years of experience</span> building and scaling{' '}
              <span className="text-highlight">cloud-based SaaS products</span> using <span className="text-highlight">Java</span>
              {' '}and <span className="text-highlight">Spring Boot</span>. Proven track record of owning{' '}
              <span className="text-highlight">complex product epics</span>, navigating{' '}
              <span className="text-highlight">cross-team dependencies</span>, and delivering{' '}
              <span className="text-highlight">high-quality features</span> in{' '}
              <span className="text-highlight">Agile</span> environments. Strong advocate of{' '}
              <span className="text-highlight">clean architecture</span>, <span className="text-highlight">clean code</span>, and{' '}
              <span className="text-highlight">performance optimization</span>, with hands-on experience leveraging{' '}
              <span className="text-highlight">AI tools</span> to improve development efficiency and code quality.
            </p>

            <div className="about-hero__metrics">
              <div className="about-hero__metric">
                <span>Primary Stack</span>
                <strong>Java + Spring</strong>
              </div>
              <div className="about-hero__metric">
                <span>Specialty</span>
                <strong>Core HR &amp; Workflow</strong>
              </div>
              <div className="about-hero__metric">
                <span>Mindset</span>
                <strong>Clean Code + AI</strong>
              </div>
            </div>
          </div>
        </div>

        <h2>
          <i className="fas fa-user-circle icon"></i>
          Who I Am
        </h2>
        <div className="about-summary-grid">
          <p>
            I map business processes before touching code, sketching the user journey, data contracts, and failure states.
            From there I shape services that feel calm to operate—clear logs, minimal surprises, and documentation people
            actually reference.
          </p>
          <ul className="about-summary-list">
            <li>Designs and ships workflow automation for enterprise HR platforms.</li>
            <li>Champions layered architecture, SOLID principles, and reliable testing.</li>
            <li>Combines engineering rigor with personal growth, reflection, and clarity.</li>
          </ul>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body about-card-body">
                <h3>
                  <i className="fas fa-code icon"></i>
                  My Engineering Philosophy
                </h3>
                <p className="card-text">
                  I slow down at the whiteboard: domain language, ownership boundaries, and operational guardrails get
                  defined before implementation. Once code lands, it is instrumented, documented, and paired with automated
                  checks so future contributors inherit clarity—not guesswork.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body about-card-body">
                <h3>
                  <i className="fas fa-briefcase icon"></i>
                  My Experience
                </h3>
                <p className="card-text">
                  I lead critical Core HR workflows—from automating onboarding approvals to rewriting modules as targeted
                  Spring Boot services. Along the way I facilitate roadmap alignment, translate compliance rules into
                  guardrails, and coach teams on sustainable delivery habits.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-5">
          <i className="fas fa-heart icon"></i>
          My Passions
        </h3>
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-dumbbell fa-2x mb-3" style={{ color: '#e74c3c' }}></i>
                <h4>Fitness &amp; Health</h4>
                <p>
                  Following a structured training regimen and constantly learning about nutrition, exercise science, and the
                  mind-body connection.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-book fa-2x mb-3" style={{ color: '#3498db' }}></i>
                <h4>Reading &amp; Learning</h4>
                <p>
                  Exploring books on software architecture, philosophy, psychology, and personal development to broaden my
                  perspective.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-pen-fancy fa-2x mb-3" style={{ color: '#2ecc71' }}></i>
                <h4>Writing &amp; Reflection</h4>
                <p>
                  Documenting my thoughts and insights on software, life, and growth—treating my ideas as intellectual
                  property.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-5">
          <i className="fas fa-bullseye icon"></i>
          What Drives Me
        </h3>
        <p>
          I'm motivated by the idea of <span className="text-highlight">continuous improvement</span>—both in my craft and in
          myself. Every project is an opportunity to <span className="text-highlight">learn something new</span>, every challenge
          is a chance to <span className="text-highlight">grow stronger</span>, and every reflection is a step toward greater
          <span className="text-highlight">clarity</span>. I see my career not just as a job, but as a{' '}
          <span className="text-highlight">lifelong journey</span> of mastery and self-discovery.
        </p>
        <p>
          This website is my digital home—a place where I share my professional work, my intellectual property, and my
          thoughts on the lessons I've learned along the way. It's a testament to the belief that what we create, both in code
          and in life, defines who we are and who we aspire to be.
        </p>

        <div className="welcome-section mt-5">
          <h3>Let's Connect</h3>
          <p>I'm always open to meaningful conversations about technology, architecture, personal growth, or anything in between.</p>
          <Link to="/contact" className="btn-custom mt-3">
            <i className="fas fa-envelope"></i>
            {' '}Get in Touch
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
