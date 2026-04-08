import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Navigation Component - Sticky header with smooth scrolling
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Animation variant for navigation items fade-in effect
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  // Navigation items array - Links to different sections
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        {/* Logo/Brand Name */}
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Sameer
        </motion.div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <a href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
                <motion.span whileHover={{ color: '#4f46e5' }}>
                  {item}
                </motion.span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <motion.button
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navigation
