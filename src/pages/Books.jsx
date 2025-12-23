import { usePageMetadata } from '../hooks/usePageMetadata'

const bookShelves = [
  {
    title: 'Already Read',
    icon: 'fas fa-book-open',
    description:
      "These are the books I've finished and frequently revisit for the insights they offered.",
    books: [
      {
        title: 'The Monk Who Sold His Ferrari',
        author: 'Robin Sharma',
        genre: 'Self-Discovery',
        takeaway: 'A reminder to slow down, create space for meaning, and pursue a life of purpose over possessions.',
      },
      {
        title: 'Think Like a Monk',
        author: 'Jay Shetty',
        genre: 'Mindfulness',
        takeaway: 'Practical mental frameworks for grounding decisions in service, gratitude, and intentional habits.',
      },
    ],
  },
  {
    title: 'Currently Reading',
    icon: 'fas fa-book-reader',
    description:
      "I'm working through these right now—expect evolving thoughts and highlights soon.",
    books: [
      {
        title: '12 Rules for Life',
        author: 'Jordan B. Peterson',
        genre: 'Personal Development',
        takeaway: 'Focusing on the discipline and responsibility themes to see how they translate into daily routines.',
      },
    ],
  },
  {
    title: 'Up Next',
    icon: 'fas fa-list-ul',
    description:
      'Books waiting on my shelf (or Kindle) that I want to dive into next.',
    books: [
      {
        title: 'Future Read Title',
        author: 'Another Author',
        genre: 'Biography',
        takeaway: 'Why this book is on my radar or what I expect to learn.',
      },
    ],
  },
]

const Books = () => {
  usePageMetadata(
    'Books Read | Parmeet Singh Bhogal',
    'A curated log of books Parmeet Singh Bhogal has completed, is currently exploring, and plans to read next.'
  )

  return (
    <>
      <div className="container main-container">
        <section className="mb-5">
          <h2>
            <i className="fas fa-layer-group icon"></i>
            {' '}Reading Journey Overview
          </h2>
          <p className="lead">
            This page serves as my personal reading log. Swap the placeholder titles, authors, and notes with your actual entries whenever you're ready.
          </p>
        </section>

        <div className="row g-4">
          {bookShelves.map(({ title, icon, description, books }) => (
            <div className="col-lg-4 col-md-6" key={title}>
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">
                    <i className={`${icon} icon`}></i>
                    {' '}{title}
                  </h3>
                  <p className="card-text">{description}</p>
                  <ul className="list-group list-group-flush mt-3">
                    {books.map(({ title: bookTitle, author, genre, takeaway }) => (
                      <li className="list-group-item" key={`${title}-${bookTitle}`}>
                        <h4 className="h6 mb-1">{bookTitle}</h4>
                        <p className="mb-1 text-muted">by {author}</p>
                        <span className="badge bg-secondary mb-2">{genre}</span>
                        <p className="small mb-0">{takeaway}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Books
