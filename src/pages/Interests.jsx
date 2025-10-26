import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { usePageMetadata } from '../hooks/usePageMetadata'

const Interests = () => {
  usePageMetadata(
    'Interests | Parmeet Singh Bhogal',
    'Personal interests and hobbies of Parmeet Singh Bhogal.'
  )

  return (
    <>
      <header>
        <h1>
          <i className="fas fa-heart"></i>
          {' '}Interests &amp; Passions
        </h1>
        <p>Beyond Software Development</p>
      </header>

      <Navbar />

      <div className="container main-container">
        <h2>
          <i className="fas fa-heart icon"></i>
          Beyond Software Development
        </h2>
        <p className="lead">
          While I'm passionate about software engineering, my interests extend far beyond code. I believe in living a balanced life where professional growth is complemented by personal development, physical fitness, and continuous learning.
        </p>

        <div className="row g-4 mt-4">
          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-dumbbell fa-3x me-3" style={{ color: '#e74c3c' }}></i>
                  <h3 className="mb-0">Fitness &amp; Training</h3>
                </div>
                <p className="card-text">
                  I follow a structured <strong>Upper–Lower split</strong> training program, focusing on building both strength and a balanced physique. Fitness isn't just about aesthetics for me—it's about discipline, consistency, and the mental clarity that comes from physical challenge.
                </p>
                <p className="card-text">
                  <strong>Training Philosophy:</strong>
                  {' '}Progressive overload, proper form, adequate recovery, and sustainable habits. I track my workouts, nutrition, and progress systematically, applying the same attention to detail I bring to my code.
                </p>
                <p className="card-text">
                  <strong>Current Goals:</strong>
                  {' '}Building strength across all major lifts, improving muscle definition, and maintaining consistency through structured programming.
                </p>
                <div className="mt-3">
                  <span className="skill-tag">Strength Training</span>
                  <span className="skill-tag">Upper-Lower Split</span>
                  <span className="skill-tag">Progressive Overload</span>
                  <span className="skill-tag">Nutrition</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-book-reader fa-3x me-3" style={{ color: '#3498db' }}></i>
                  <h3 className="mb-0">Reading &amp; Learning</h3>
                </div>
                <p className="card-text">
                  I'm an avid reader with diverse interests spanning software engineering, personal development, finance, and philosophy. Reading helps me gain new perspectives, challenge my assumptions, and continuously expand my knowledge.
                </p>
                <p className="card-text">
                  <strong>Recent Reads:</strong>
                </p>
                <ul>
                  <li>
                    <em>Clean Architecture</em>
                    {' '}by Robert C. Martin — Principles for building maintainable software systems
                  </li>
                  <li>
                    <em>Domain-Driven Design</em>
                    {' '}by Eric Evans — Tackling complexity in the heart of software
                  </li>
                  <li>
                    <em>Rich Dad Poor Dad</em>
                    {' '}by Robert Kiyosaki — Financial education and mindset
                  </li>
                  <li>
                    <em>Atomic Habits</em>
                    {' '}by James Clear — Building better habits and breaking bad ones
                  </li>
                </ul>
                <p className="card-text">
                  <strong>Currently Exploring:</strong>
                  {' '}Books on philosophy, psychology, and personal effectiveness to complement my technical knowledge with wisdom about human behavior and decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-seedling fa-3x me-3" style={{ color: '#2ecc71' }}></i>
                  <h3 className="mb-0">Self-Growth &amp; Reflection</h3>
                </div>
                <p className="card-text">
                  I'm deeply committed to <strong>continuous self-improvement</strong>—not in a superficial way, but through genuine reflection, self-awareness, and intentional growth. I believe that becoming a better engineer requires becoming a better person.
                </p>
                <p className="card-text">
                  <strong>Practices:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Journaling</strong>
                    {' '}— Capturing thoughts, analyzing experiences, and tracking progress
                  </li>
                  <li>
                    <strong>Reflection</strong>
                    {' '}— Regular introspection on my decisions, behaviors, and goals
                  </li>
                  <li>
                    <strong>Writing</strong>
                    {' '}— Documenting insights and lessons learned (see my Posts section)
                  </li>
                  <li>
                    <strong>Goal Setting</strong>
                    {' '}— Clear objectives for professional and personal development
                  </li>
                </ul>
                <p className="card-text">
                  I view self-growth as a lifelong project—always iterating, always improving, always learning.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-lightbulb fa-3x me-3" style={{ color: '#f39c12' }}></i>
                  <h3 className="mb-0">Productivity &amp; Systems</h3>
                </div>
                <p className="card-text">
                  I'm fascinated by <strong>productivity systems and methodologies</strong>—not for the sake of doing more, but for doing what matters effectively. I explore different frameworks and adapt them to my needs.
                </p>
                <p className="card-text">
                  <strong>Systems I Use:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Create-Consume-Clear</strong>
                    {' '}— My personal framework for daily balance
                  </li>
                  <li>
                    <strong>Time Blocking</strong>
                    {' '}— Structured scheduling for deep work
                  </li>
                  <li>
                    <strong>Deliberate Practice</strong>
                    {' '}— Focused improvement in specific skills
                  </li>
                  <li>
                    <strong>80/20 Rule</strong>
                    {' '}— Focusing on high-impact activities
                  </li>
                </ul>
                <p className="card-text">
                  The goal isn't productivity for its own sake—it's about creating more space for meaningful work and meaningful life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-5">
          <i className="fas fa-compass icon"></i>
          Philosophies That Guide Me
        </h3>
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-infinity icon"></i>
                  Long-Term Thinking
                </h4>
                <p className="card-text">
                  Whether in code or life, I prioritize long-term sustainability over short-term convenience. Every decision is an investment in the future.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-balance-scale icon"></i>
                  Balance &amp; Integration
                </h4>
                <p className="card-text">
                  I don't believe in work-life balance as separate compartments. Instead, I aim for an integrated life where all parts support and enhance each other.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-sync-alt icon"></i>
                  Continuous Iteration
                </h4>
                <p className="card-text">
                  Just as we refactor code, we should refactor ourselves. Regular reflection and adjustment lead to continuous improvement and growth.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4>
                  <i className="fas fa-gem icon"></i>
                  Quality Over Quantity
                </h4>
                <p className="card-text">
                  In fitness, work, and life—I prioritize doing fewer things with excellence rather than many things with mediocrity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-section mt-5">
          <h3>Let's Connect</h3>
          <p>If you share similar interests or want to discuss any of these topics, I'd love to hear from you.</p>
          <Link to="/contact" className="btn-custom mt-3">
            <i className="fas fa-envelope"></i>
            {' '}Get in Touch
          </Link>
        </div>
      </div>
    </>
  )
}

export default Interests
