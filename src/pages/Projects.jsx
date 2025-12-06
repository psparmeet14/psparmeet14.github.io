import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const Projects = () => {
  usePageMetadata(
    'Projects | Parmeet Singh Bhogal',
    'Notable projects and technical achievements by Parmeet Singh Bhogal.'
  )

  return (
    <>
      <header>
        <h1>
          <i className="fas fa-code-branch"></i>
          {' '}Projects &amp; Work
        </h1>
        <p>Building Solutions That Scale and Endure</p>
      </header>

      <div className="container main-container">
        <h2>
          <i className="fas fa-code-branch icon"></i>
          Professional Projects
        </h2>
        <p className="lead">
          Throughout my career at CatalystOne Solutions, I've worked on impactful projects that automate and optimize
          enterprise HR workflows. Here are the key projects that showcase my technical expertise and problem-solving
          abilities.
        </p>

        <div className="row g-4 mt-4">
          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-tasks fa-3x me-3" style={{ color: '#3498db' }}></i>
                  <h3 className="card-title mb-0">Job Requisition Workflow Feature</h3>
                </div>
                <p className="card-text">
                  <strong>Challenge:</strong>
                  {' '}Need for automated job requisition workflow within the Core HR Module to streamline recruitment processes and ensure
                  compliance with organizational approval hierarchies.
                </p>
                <p className="card-text">
                  <strong>Solution:</strong>
                  {' '}Spearheaded feature development for Job Requisition within the Workflow module—a core HRIS system automating user onboarding,
                  offboarding, and internal transitions through regulated task flows tied to organizational roles. Performed end-to-end
                  technical analysis, identified cross-team dependencies, and created detailed roadmaps with estimates on Miro.
                </p>
                <p className="card-text">
                  <strong>Impact:</strong>
                  {' '}Delivered feature with real-time progress tracking, biweekly stakeholder demos, and comprehensive support documentation.
                  Enhanced team collaboration through peer code reviews.
                </p>
                <div className="mt-3">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">MS SQL Server</span>
                  <span className="skill-tag">Workflow Automation</span>
                  <span className="skill-tag">Agile/Scrum</span>
                  <span className="skill-tag">Miro</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-project-diagram fa-3x me-3" style={{ color: '#e74c3c' }}></i>
                  <h3 className="card-title mb-0">Monolith to Microservice Migration</h3>
                </div>
                <p className="card-text">
                  <strong>Challenge:</strong>
                  {' '}Legacy monolithic architecture limiting scalability, deployment flexibility, and hindering independent service development and maintenance.
                </p>
                <p className="card-text">
                  <strong>Solution:</strong>
                  {' '}Contributed to migrating a monolith module to a Spring Boot microservice as part of a consultant-led team. Ensured business logic integrity while
                  enhancing validation, permission handling, and API performance (including pagination). Developed and documented RESTful APIs using OpenAPI specification
                  and created Azure Workbooks for monitoring.
                </p>
                <p className="card-text">
                  <strong>Impact:</strong>
                  {' '}Implemented layered architecture with SOLID principles, clear separation of DTOs, domain, and presentation models. Configured multi-environment deployments
                  and achieved comprehensive test coverage (unit, DAO, integration, MockMVC).
                </p>
                <div className="mt-3">
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">OpenAPI</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Layered Architecture</span>
                  <span className="skill-tag">SOLID Principles</span>
                  <span className="skill-tag">Testing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-rocket fa-3x me-3" style={{ color: '#2ecc71' }}></i>
                  <h3 className="card-title mb-0">Performance Optimization &amp; Observability</h3>
                </div>
                <p className="card-text">
                  <strong>Challenge:</strong>
                  {' '}System performance degradation with large datasets (10K+ employees), causing slow response times and limited visibility into system behavior.
                </p>
                <p className="card-text">
                  <strong>Solution:</strong>
                  {' '}Optimized database queries, improved API performance through pagination and efficient data retrieval. Enhanced system observability by implementing comprehensive
                  logging, debugging capabilities, and Azure monitoring workbooks.
                </p>
                <p className="card-text">
                  <strong>Impact:</strong>
                  {' '}Resolved high-priority support tickets, improved system reliability, and provided better insights for troubleshooting and performance analysis.
                </p>
                <div className="mt-3">
                  <span className="skill-tag">Performance Tuning</span>
                  <span className="skill-tag">SQL Optimization</span>
                  <span className="skill-tag">Azure Monitoring</span>
                  <span className="skill-tag">Logging</span>
                  <span className="skill-tag">API Optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-plug fa-3x me-3" style={{ color: '#9b59b6' }}></i>
                  <h3 className="card-title mb-0">RESTful API Design &amp; Documentation</h3>
                </div>
                <p className="card-text">
                  <strong>Challenge:</strong>
                  {' '}Need for well-documented, standardized APIs that enable seamless integration with external systems and provide clear contracts for frontend and partner teams.
                </p>
                <p className="card-text">
                  <strong>Solution:</strong>
                  {' '}Developed and documented RESTful APIs following OpenAPI specification standards. Implemented proper error handling, validation, permission management, and pagination for
                  optimal performance. Created comprehensive API documentation for both internal and external consumers.
                </p>
                <p className="card-text">
                  <strong>Impact:</strong>
                  {' '}Enabled reliable integrations, reduced integration time for partner teams, and improved API discoverability and usability through clear documentation.
                </p>
                <div className="mt-3">
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">API Design</span>
                  <span className="skill-tag">OpenAPI</span>
                  <span className="skill-tag">Authentication</span>
                  <span className="skill-tag">Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-5">
          <i className="fas fa-lightbulb icon"></i>
          Personal Projects &amp; Experiments
        </h2>
        <p>
          Beyond professional work, I explore side projects that allow me to experiment with new technologies and ideas. These projects help me stay curious and continue learning.
        </p>

        <div className="row g-4 mt-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-user-circle icon"></i>
                  Personal Portfolio Website
                </h3>
                <p className="card-text">
                  This very website—built as a platform to showcase my work, share my thoughts, and document my intellectual property. It reflects my commitment to transparency and
                  continuous documentation of my professional journey.
                </p>
                <div className="mt-3">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">Bootstrap</span>
                  <span className="skill-tag">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-flask icon"></i>
                  Ongoing Experiments
                </h3>
                <p className="card-text">
                  Exploring various technologies and concepts including fitness tracking applications, personal productivity tools, and small-scale web applications. These experiments help me stay
                  sharp and innovative.
                </p>
                <div className="mt-3">
                  <span className="skill-tag">Experimentation</span>
                  <span className="skill-tag">Learning</span>
                  <span className="skill-tag">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-section mt-5">
          <h3>Interested in My Work?</h3>
          <p>I'm always open to discussing projects, collaborations, or sharing insights about software engineering.</p>
          <div className="social-links">
            <a
              href="https://github.com/psparmeet14"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
              View My GitHub
            </a>
            <Link to="/contact" className="social-link">
              <i className="fas fa-envelope"></i>
              {' '}Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
