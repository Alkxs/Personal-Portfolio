import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

import ParticlesBackgroundDark from './components/ParticlesDark'
import ParticlesBackgroundLight from './components/ParticlesLight'
import ThemeContext from './contexts/ThemeContext'
import { useContext } from 'react'

function App() {

  const { theme } = useContext(ThemeContext)
  const isDarkMode = theme === 'dark'

  return (
    <>
      {isDarkMode ? <ParticlesBackgroundDark /> : <ParticlesBackgroundLight />}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollTop />
      <Footer />
    </>
  )
}

export default App
