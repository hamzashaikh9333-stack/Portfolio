import React from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

// Main App Component - Portfolio container
function App() {
  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section - Landing page with introduction */}
      <Hero />

      {/* About Section - Personal introduction and background */}
      <About />

      {/* Skills Section - Technical skills with animations */}
      <Skills />

      {/* Projects Section - Showcase of recent projects */}
      <Projects />

      {/* Contact Section - Call to action and contact info */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Sameer - Frontend React Developer. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
