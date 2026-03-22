import React from 'react'
import profile from "../assets/profile.jpg"
import { motion } from 'framer-motion'

// About Component - Personal background and introduction
const About = () => {
  // Animation variants for the section fade-in
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  // Animation variants for text elements - Slide in from left
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Animation for the image - Slide in from right with rotation
  const imageVariants = {
    hidden: { opacity: 0, x: 50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Section heading with underline animation */}
        <motion.h2
          className="section-title"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          About <span className="highlight">Me</span>
        </motion.h2>

        <div className="about-content">
          {/* About text content */}
          <motion.div
            className="about-text"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="about-description">
              I'm a dedicated Frontend React Developer with a passion for creating engaging
              and user-friendly web applications. With expertise in modern JavaScript,
              React, and CSS, I transform ideas into beautiful digital experiences.
            </p>

            {/* Key highlights as animated list */}
            <motion.div className="about-highlights">
              {['Problem Solver', 'UI/UX Enthusiast', 'Continuous Learner'].map((item, i) => (
                <motion.div
                  key={item}
                  className="highlight-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative image placeholder with hover effect */}
          <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="image-placeholder">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="rotating-border"
              />
              <img src={profile} alt="Profile" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
