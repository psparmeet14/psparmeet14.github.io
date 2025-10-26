import Navbar from '../components/Navbar'
import { usePageMetadata } from '../hooks/usePageMetadata'

const Home = () => {
  usePageMetadata(
    'Parmeet Singh Bhogal | Software Engineer',
    'Portfolio of Parmeet Singh Bhogal - Software Engineer specializing in Java, Spring Boot, Microservices, and backend development with over 6 years of experience.'
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
              Software Engineer | 6+ Years Experience
            </p>
            <p>
              <i className="fas fa-seedling icon"></i>
              Backend Specialist | Microservices &amp; Spring Boot Expert
            </p>
          </div>
        </div>
      </header>

      <Navbar />

      <div className="container main-container">
        <div className="welcome-section">
          <h2>Welcome to My Digital Space</h2>
          <p className="lead">
            Result-oriented and passionate software engineer with an unceasing curiosity to learn, possessing
            over 6 years of experience in cloud-based application development. I specialize in designing and
            developing enterprise application software of the highest quality, focusing on Core HR systems and
            workflow automation at CatalystOne Solutions in Chandigarh, India.
          </p>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-microchip fa-3x mb-3" style={{ color: '#3498db' }}></i>
                <h3 className="card-title">Backend Development</h3>
                <p className="card-text">
                  Expert in Java, Spring Boot, and microservices architecture. Building scalable, maintainable backend
                  systems.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-project-diagram fa-3x mb-3" style={{ color: '#e74c3c' }}></i>
                <h3 className="card-title">Microservices Migration</h3>
                <p className="card-text">
                  Experience migrating monolithic applications to microservices with Spring Boot and Azure.
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
                  Designing and implementing automated workflows for enterprise HR systems serving 10K+ users.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2>What I Do</h2>
          <p>
            I design and build scalable backend systems for Core HR platforms at CatalystOne Solutions. My work involves
            contributing to cloud-based HR software development, focusing on Core HR and Workflow modules that automate
            employee onboarding and offboarding processes. I advocate for clean code practices and clean architecture
            within the team.
          </p>
          <p>
            I've transformed legacy backend code into scalable, maintainable layered architecture and optimized workflow
            dashboard performance for 13,000+ records, reducing load time to 2 seconds through partial data loading,
            in-memory caching, optimized SQL queries, JSON minification, and lazy loading. I actively contribute to
            full-stack development and have worked on creating survey modules while maintaining clear communication with
            stakeholders.
          </p>
        </div>

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

      <div className="container my-5">
        <h2>Welcome!</h2>
        <p>
          Hi, I’m Parmeet Singh Bhogal. I design and build scalable backend systems and enjoy simplifying complexity in
          software. Beyond code, I’m passionate about self-growth, fitness, and writing reflective insights.
        </p>
      </div>
    </>
  )
}

export default Home
