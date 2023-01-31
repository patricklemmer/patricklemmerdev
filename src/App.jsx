// Imports
// React imports
import React from 'react'

// Component imports
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

// Utility imports
import ScrollToTop from './utilities/scrollToTop'

function App() {
  return (
    <div className="w-full font-sans bg-skin-bg-light text-skin-font-light dark:bg-skin-bg-dark dark:text-skin-font-dark">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      {/* <Services /> */}
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
