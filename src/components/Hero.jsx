import React from 'react'
import { motion } from 'framer-motion'

// Hero Component - Main landing section with introduction
const Hero = () => {
  // Animation variants for container - Controls staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  // Animation variants for child elements - Fade in and move up
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Animation for the main heading - Scale and fade in
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Main container with staggered animations */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome text */}
          <motion.p variants={itemVariants} className="hero-subtitle">
            Welcome to my portfolio
          </motion.p>

          {/* Main heading with scale animation */}
          <motion.h1 variants={headingVariants} className="hero-title">
            Hi, I'm <span className="highlight">Sameer</span>
          </motion.h1>

          {/* Role description */}
          <motion.p variants={itemVariants} className="hero-description">
            A passionate <strong>Full Stack Developer (MERN)</strong> building scalable web applications and real-time experiences, with a growing focus on AI-powered solutions and modern web technologies.
          </motion.p>
          

          {/* Call to action button with hover effect */}
          <motion.button
            variants={itemVariants}
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact">Get in Touch</a>
          </motion.button>
        </motion.div>

        {/* Animated background shapes */}
        <motion.div className="hero-background">
          {/* Floating orb animation - Smooth floating effect */}
          <motion.div
            className="orb orb-1"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Second floating orb with different timing */}
          <motion.div
            className="orb orb-2"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
