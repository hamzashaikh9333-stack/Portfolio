import React from "react";
import { motion } from "framer-motion";

// Skills Component - Display technical skills with animations
const Skills = () => {
  // Animation variants for container - Stagger child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual skill card - Scale and fade
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Skills data structure - Organized by category
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Tools & Libraries",
      skills: ["Framer Motion", "Gsap", "Redux", "Git", "SASS"],
    },
    {
      category: "Design",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Animation"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    },
    {
      category: "Advanced / Learning",
      skills: ["Socket.io", "LangChain", "AI Integration", "Tavily"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        {/* Section heading */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          My <span className="highlight">Skills</span>
        </motion.h2>

        {/* Skills grid with staggered animations */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="skill-group"
              variants={skillVariants}
            >
              {/* Category heading */}
              <h3 className="skill-category">{skillGroup.category}</h3>

              {/* Individual skills with progress bar effect */}
              <div className="skill-items">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ x: 10 }}
                  >
                    {/* Skill badge with animated background */}
                    <motion.span
                      className="skill-badge"
                      whileHover={{ backgroundColor: "#4f46e5", color: "#fff" }}
                    >
                      {skill}
                    </motion.span>

                    {/* Animated skill bar - Shows proficiency level */}
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + Math.random() * 30}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
