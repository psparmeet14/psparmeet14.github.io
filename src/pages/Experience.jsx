import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { usePageMetadata } from '../hooks/usePageMetadata'

const Experience = () => {
  usePageMetadata(
    'Experience | Parmeet Singh Bhogal',
    'Professional experience and technical skills of Parmeet Singh Bhogal.'
  )

  return (
    <>
      <header>
        <h1>
          <i className="fas fa-briefcase"></i>
          {' '}Professional Experience
        </h1>
        <p>6+ Years of Building Scalable Backend Systems</p>
      </header>

      <Navbar />

      <div className="container main-container">
        <h2>
          <i className="fas fa-briefcase icon"></i>
          Professional Journey
        </h2>
        <p className="lead">
          My career has been focused on cloud-based application development, backend systems, and building scalable
          enterprise solutions. Here's a snapshot of my professional experience.
        </p>

        <div className="timeline-item">
          <h3>Senior Software Engineer - Development</h3>
          <p className="timeline-date">
            <i className="fas fa-calendar-alt"></i>
            {' '}January 2018 – Present | CatalystOne Solutions, Chandigarh, India
          </p>
          <p>
            As a Senior Software Engineer at CatalystOne Solutions, I contribute to the development of cloud-based HR software,
            focusing on Core HR and Workflow modules that automate employee onboarding and offboarding processes. I advocate for
            clean code practices and clean architecture within the team while delivering enterprise-grade solutions.
          </p>

          <h4>Key Achievements &amp; Responsibilities:</h4>
          <ul>
            <li>
              Contributed to the development of CatalystOne's cloud-based HR software, focusing on <strong>Core HR and Workflow module</strong>—automated
              employee onboarding and offboarding process
            </li>
            <li>Advocated for clean code practices and clean architecture within the team</li>
            <li>Designed <strong>API specifications with OpenAPI</strong> and implemented best practices for RESTful API development</li>
            <li>Transformed legacy backend code into scalable, maintainable <strong>layered architecture</strong></li>
            <li>
              Optimized workflow dashboard performance for <strong>13,000+ records</strong>, reducing load time to <strong>2 seconds</strong> by implementing partial data loading,
              in-memory caching, optimized SQL queries, JSON minification, and lazy loading
            </li>
            <li>Contributed to strategy meetings for the Workflow module, shaping its future architecture</li>
            <li>Maintained clear communication with stakeholders and utilized <strong>Miro</strong> for planning project milestones</li>
            <li>Delivered key features in major releases, resolved critical bugs, and led peer code reviews</li>
            <li>Developed and maintained <strong>unit and integration tests</strong> to ensure code quality</li>
            <li>
              Actively contributed to full-stack development and the creation of CatalystOne's <strong>"Work Balance" survey module</strong>
            </li>
            <li>Proficient in <strong>Agile methodologies</strong>, specifically Scrum</li>
          </ul>

          <div className="mt-3">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">Spring Security</span>
            <span className="skill-tag">Spring AOP</span>
            <span className="skill-tag">Spring JDBC</span>
            <span className="skill-tag">Spring Cloud</span>
            <span className="skill-tag">Hibernate</span>
            <span className="skill-tag">JPA</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">OpenAPI</span>
            <span className="skill-tag">gRPC</span>
            <span className="skill-tag">Microservices</span>
            <span className="skill-tag">MS SQL Server</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Kubernetes</span>
            <span className="skill-tag">Azure DevOps</span>
            <span className="skill-tag">JUnit 5</span>
            <span className="skill-tag">Mockito 3</span>
            <span className="skill-tag">Test Containers</span>
          </div>
        </div>

        <h2 className="mt-5">
          <i className="fas fa-tools icon"></i>
          Technical Skills
        </h2>

        <div className="row g-4 mt-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-code icon"></i>
                  Languages
                </h3>
                <p>
                  <strong>Primary:</strong>
                  {' '}Java, JavaScript
                </p>
                <p>
                  <strong>Web:</strong>
                  {' '}HTML5, CSS3
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-server icon"></i>
                  Tools and Frameworks
                </h3>
                <p>
                  <strong>Spring Ecosystem:</strong>
                  {' '}Spring Boot, Spring Security, Spring AOP, Spring JDBC, Spring Cloud
                </p>
                <p>
                  <strong>ORM &amp; Data:</strong>
                  {' '}Hibernate, JPA
                </p>
                <p>
                  <strong>Build Tools:</strong>
                  {' '}Git, Gradle, Maven
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-paint-brush icon"></i>
                  Web Technologies
                </h3>
                <p>
                  <strong>Frontend:</strong>
                  {' '}jQuery, Bootstrap, Ajax, JSON
                </p>
                <p>
                  <strong>Backend:</strong>
                  {' '}Apache Velocity, Servlets
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-database icon"></i>
                  Database
                </h3>
                <p>
                  <strong>Databases:</strong>
                  {' '}Microsoft SQL Server, MySQL
                </p>
                <p>
                  <strong>Skills:</strong>
                  {' '}Database Design, Query Optimization, Stored Procedures
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-cloud icon"></i>
                  Cloud Technologies
                </h3>
                <p>
                  <strong>Containerization:</strong>
                  {' '}Docker, Kubernetes
                </p>
                <p>
                  <strong>DevOps:</strong>
                  {' '}Azure DevOps
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-vial icon"></i>
                  Testing Framework
                </h3>
                <p>
                  <strong>Frameworks:</strong>
                  {' '}Test Containers, JUnit 5, Mockito 3
                </p>
                <p>
                  <strong>Testing:</strong>
                  {' '}Unit Testing, Integration Testing
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-cube icon"></i>
                  Other Skills
                </h3>
                <p>
                  <strong>Design &amp; Architecture:</strong>
                  {' '}Object Oriented Design, SOLID Principles, Design Patterns, Refactoring, Layered Architecture
                </p>
                <p>
                  <strong>Programming Paradigms:</strong>
                  {' '}Functional Programming, Multi-threading, Concurrency
                </p>
                <p>
                  <strong>Web Services:</strong>
                  {' '}REST, SOAP, gRPC, Microservices, JDBC
                </p>
                <p>
                  <strong>Agile Tools:</strong>
                  {' '}Jira, Confluence, Miro
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-5">
          <i className="fas fa-graduation-cap icon"></i>
          Education
        </h2>

        <div className="row g-4 mt-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-university icon"></i>
                  Bachelor of Technology in Computer Science &amp; Engineering
                </h3>
                <p className="timeline-date">
                  <i className="fas fa-calendar-alt"></i>
                  {' '}2014 – 2018
                </p>
                <p>
                  <strong>RIMT University</strong>, Mandi Gobindgarh, Punjab, India
                </p>
                <p>
                  <strong>Affiliation:</strong>
                  {' '}I.K.G. Punjab Technical University (I.K.G.P.T.U)
                </p>
                <p>
                  <strong>Aggregate:</strong>
                  {' '}75.68%
                </p>
                <p className="mb-0">
                  Completed comprehensive coursework in computer science fundamentals including data structures, algorithms,
                  object-oriented programming, database management systems, software engineering, and web technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-school icon"></i>
                  Secondary Education
                </h3>
                <p>
                  <strong>Ryan International School</strong>, Ludhiana, Punjab, India
                </p>
                <ul className="mb-0">
                  <li>
                    <strong>Intermediate (2014):</strong>
                    {' '}84.54% aggregate
                  </li>
                  <li>
                    <strong>10th Grade (2012):</strong>
                    {' '}CGPA 10.0
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-5">
          <i className="fas fa-trophy icon"></i>
          Extra-Curricular Activities and Achievements
        </h2>

        <div className="card mt-3">
          <div className="card-body">
            <ul>
              <li>Participated in CatalystOne hackathons and various organizational events</li>
              <li>Received the <strong>All-Round Best Student award</strong> in both 10th and 12th grade</li>
            </ul>
          </div>
        </div>

        <div className="welcome-section mt-5">
          <h3>Looking for Collaboration?</h3>
          <p>I'm always interested in challenging projects and meaningful professional connections.</p>
          <Link to="/contact" className="btn-custom mt-3">
            <i className="fas fa-envelope"></i>
            {' '}Let's Talk
          </Link>
        </div>
      </div>
    </>
  )
}

export default Experience
