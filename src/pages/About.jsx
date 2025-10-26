import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { usePageMetadata } from '../hooks/usePageMetadata'

const About = () => {
  usePageMetadata(
    'About Me | Parmeet Singh Bhogal',
    "Learn more about Parmeet Singh Bhogal's journey as a software engineer and personal growth enthusiast."
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
            <h1>About Me</h1>
            <p>Exploring the intersection of code, philosophy, and growth</p>
          </div>
        </div>
      </header>

      <Navbar />

      <div className="container main-container">
        <h2>
          <i className="fas fa-user-circle icon"></i>
          Who I Am
        </h2>
        <p className="lead">
          I'm Parmeet Singh Bhogal, a result-oriented and passionate Software Engineer with over 6 years of experience in
          cloud-based application development. Currently based in Chandigarh, India, working at CatalystOne Solutions, I
          possess an unceasing curiosity to learn and specialize in Java, Spring Boot, and microservices architecture. My
          journey is driven by a desire to utilize my technical expertise in designing and developing enterprise
          application software of the highest quality.
        </p>

        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-code icon"></i>
                  My Engineering Philosophy
                </h3>
                <p className="card-text">
                  I believe in writing code that is not just functional, but maintainable and scalable. Layered architecture,
                  SOLID principles, and comprehensive testing aren't just methodologies to me—they're essential practices that
                  ensure long-term system reliability. I strive to build systems that are clear, well-documented, and easy to
                  extend as requirements evolve.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>
                  <i className="fas fa-briefcase icon"></i>
                  My Experience
                </h3>
                <p className="card-text">
                  I've spent 6 years at CatalystOne Solutions developing Core HR systems that automate complex employee
                  lifecycle workflows for 10K+ users. My work involves feature development, microservice migration, API
                  design, and system optimization. I collaborate with cross-functional teams using Agile methodologies and
                  focus on delivering value through well-tested, production-ready code.
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
          I'm motivated by the idea of continuous improvement—both in my craft and in myself. Every project is an opportunity
          to learn something new, every challenge is a chance to grow stronger, and every reflection is a step toward greater
          clarity. I see my career not just as a job, but as a lifelong journey of mastery and self-discovery.
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
