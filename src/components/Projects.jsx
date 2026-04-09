import React, { useState } from "react";
import { motion } from "framer-motion";

// Projects Component - Showcase portfolio projects with hover effects
const Projects = () => {
  // State for tracking which project is hovered
  const [hoveredProject, setHoveredProject] = useState(null);

  // Animation variants for container - Stagger child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for project cards - Scale and fade
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Projects data - Array of sample projects
  const projects = [
    {
      id: 1,
      title: "wiggle Ai - AI-Powered Chatbot",
      description:
        "An AI-powered chatbot designed to provide seamless customer support and engagement.",
      tech: ["React", "Node.js", "langchain", "WebSocket", "Tavily"],
      image: "🤖",
      link: "https://wiggle-ai.netlify.app",
    },

    {
      id: 3,
      title: "Portfolio Website",
      description:
        "An animated portfolio showcasing projects with smooth transitions and interactions.",
      tech: ["React", "Framer Motion", "CSS3", "Vite"],
      image: "💼",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Section heading */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          My <span className="highlight">Projects</span>
        </motion.h2>

        {/* Projects grid with staggered animations */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              {/* Project image/icon container with hover effect */}
              <motion.div
                className="project-image"
                animate={{
                  scale: hoveredProject === project.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="project-icon">{project.image}</span>
              </motion.div>

              {/* Project content */}
              <div className="project-info">
                {/* Project title */}
                <h3 className="project-title">{project.title}</h3>

                {/* Project description */}
                <p className="project-description">{project.description}</p>

                {/* Technology tags with staggered animation */}
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "#4f46e5",
                        color: "#fff",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* View project button with animated arrow */}
                <motion.a
                  href={project.link}
                  className="project-link"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project <span className="arrow">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
