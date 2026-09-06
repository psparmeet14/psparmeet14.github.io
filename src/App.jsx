import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Now from './components/Now'
import Toolbox from './components/Toolbox'
import Work from './components/Work'
import Writing from './components/Writing'
import { posts } from './data/site'

// Page order. Sections are numbered from this list, and `nav: true` ones make up
// the menu, so adding or reordering a section here is the only change needed.
const sections = [
  { id: 'work', label: 'Work', Component: Work, nav: true },
  { id: 'experience', label: 'Experience', Component: Experience, nav: true },
  { id: 'toolbox', label: 'Toolbox', Component: Toolbox, nav: false },
  { id: 'writing', label: 'Writing', Component: Writing, nav: true, show: posts.some((post) => post.url) },
  { id: 'now', label: 'Now', Component: Now, nav: true },
  { id: 'contact', label: 'Contact', Component: Contact, nav: true },
].filter((section) => section.show !== false)

const App = () => (
  <>
    <a className="skip-link" href="#work">
      Skip to content
    </a>
    <Nav sections={sections.filter((section) => section.nav)} />
    <main>
      <Hero />
      {sections.map((section, index) => {
        const { id, Component } = section
        return <Component key={id} id={id} number={String(index + 1).padStart(2, '0')} />
      })}
    </main>
    <Footer />
  </>
)

export default App
