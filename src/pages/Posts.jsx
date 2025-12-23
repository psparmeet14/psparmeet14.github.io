import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const posts = [
  {
    title: 'Clean Architecture: Why It Matters',
    description:
      "Over the past few years, I've learned that great software isn't just about making things work—it's about making them work elegantly, sustainably, and with purpose. Clean Architecture has transformed how I approach every project.",
    descriptionTwo:
      'When you separate your domain logic from infrastructure concerns, you create systems that are easier to test, easier to maintain, and easier to understand. It\'s not just a technical choice—it\'s a commitment to quality and long-term thinking.',
    tags: ['Clean Architecture', 'Software Design', 'Best Practices'],
  },
  {
    title: 'The Parallel Between Code and Life',
    description:
      'Software engineering has taught me more about life than I ever expected. The principles we apply to writing good code—clarity, discipline, continuous improvement—are the same principles that lead to personal growth.',
    descriptionTwo:
      'Just as we refactor messy code, we can refactor our habits. Just as we write tests to catch errors early, we can build feedback loops to course-correct in life. The metaphor runs deep, and it\'s incredibly powerful.',
    tags: ['Personal Growth', 'Philosophy', 'Life Lessons'],
  },
  {
    title: 'Performance Optimization: Beyond the Quick Fixes',
    description:
      "Performance optimization isn't about blindly adding caching or throwing more hardware at the problem. It's about understanding your system deeply—where the bottlenecks are, what your data access patterns look like, and how your architecture impacts efficiency.",
    descriptionTwo:
      'Recently, I worked on optimizing a system handling 10K+ employee records. By rethinking our database queries, introducing strategic caching, and refactoring inefficient algorithms, we reduced response times by 70%. The lesson? True optimization comes from understanding, not guessing.',
    tags: ['Performance', 'Optimization', 'Backend Engineering'],
  },
  {
    title: 'Consistency Over Intensity',
    description:
      'Whether it\'s fitness, learning, or career growth—consistency beats intensity every time. You don\'t need to work 12-hour days or do extreme workouts. You need to show up regularly, make incremental progress, and trust the process.',
    descriptionTwo:
      "I've followed an Upper-Lower split training program for months now, and the results aren't from any single heroic workout—they're from showing up four times a week, every week. The same applies to mastering software engineering: daily practice, steady learning, continuous reflection.",
    tags: ['Consistency', 'Personal Development', 'Fitness'],
  },
  {
    title: 'Domain-Driven Design: Speaking the Language of Business',
    description:
      "One of the most powerful concepts I've embraced is Domain-Driven Design. It's not just about writing code that works—it's about writing code that reflects the real-world domain you're modeling.",
    descriptionTwo:
      'When your code speaks the same language as your business stakeholders, magic happens. Communication becomes clearer, bugs decrease, and the system becomes intuitive. DDD isn\'t a silver bullet, but it\'s a mindset that makes complex systems manageable.',
    tags: ['Domain-Driven Design', 'Software Architecture', 'Business Logic'],
  },
  {
    title: 'Your Work is Your Intellectual Property',
    description:
      "I've come to view everything I create—code, insights, learnings, reflections—as my intellectual property. Not in a possessive sense, but as a recognition that the work we do and the knowledge we accumulate have value.",
    descriptionTwo:
      "This website is my digital IP—a curated collection of my professional journey, my technical expertise, and my personal philosophy. It's a testament to the idea that we should own and showcase what we create. Your work matters. Document it. Share it. Own it.",
    tags: ['Intellectual Property', 'Personal Branding', 'Professional Growth'],
  },
]

const Posts = () => {
  usePageMetadata(
    'Posts | Parmeet Singh Bhogal',
    'Insights and reflections on software engineering, personal growth, and professional development by Parmeet Singh Bhogal.'
  )

  return (
    <>
      <div className="container main-container">
        <h2>
          <i className="fas fa-pencil-alt icon"></i>
          My LinkedIn Posts &amp; Reflections
        </h2>
        <p className="lead">
          I regularly share insights, reflections, and lessons learned on LinkedIn. This page showcases some of my most meaningful posts on software engineering, personal growth, and professional development. Each post represents my intellectual property and journey of continuous learning.
        </p>

        <div className="row g-4 mt-4">
          {posts.map(({ title, description, descriptionTwo, tags }) => (
            <div className="col-lg-12" key={title}>
              <div className="card">
                <div className="card-body">
                  <div className="post-card-header mb-3">
                    <span className="post-card-icon">
                      <i className="fab fa-linkedin"></i>
                    </span>
                    <div className="post-card-heading">
                      <h3 className="card-title mb-1">{title}</h3>
                      <p className="card-date">
                        <i className="fas fa-calendar-alt"></i>
                        {' '}Posted on LinkedIn
                      </p>
                    </div>
                  </div>
                  <p className="card-text">{description}</p>
                  <p className="card-text">{descriptionTwo}</p>
                  <div className="mt-3">
                    {tags.map((tag) => (
                      <span className="skill-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://linkedin.com/in/parmeet-s-bhogal-6a259715a"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-custom mt-3"
                  >
                    <i className="fab fa-linkedin"></i>
                    {' '}View on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="welcome-section mt-5">
          <h3>Follow Me on LinkedIn</h3>
          <p>I regularly share insights on software engineering, architecture, personal growth, and professional development.</p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/parmeet-s-bhogal-6a259715a"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
              {' '}Connect on LinkedIn
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

export default Posts
