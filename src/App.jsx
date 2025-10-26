import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Posts from './pages/Posts'
import Interests from './pages/Interests'
import Contact from './pages/Contact'
import PhotoGuide from './pages/PhotoGuide'
import NotFound from './pages/NotFound'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="posts" element={<Posts />} />
      <Route path="interests" element={<Interests />} />
      <Route path="contact" element={<Contact />} />
      <Route path="photo-guide" element={<PhotoGuide />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
