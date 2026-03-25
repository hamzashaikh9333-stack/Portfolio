import React, { useState } from "react";
import { motion } from "framer-motion";

// Contact Component - Call to action and contact information
const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sameer-shaikh-081ba23a8/",
    },
    {
      name: "GitHub",
      url: "https://github.com/hamzashaikh9333-stack",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-username",
    },
  ];
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for form submission feedback
  const [submitted, setSubmitted] = useState(false);

  // Animation variants for container - Stagger child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for form elements - Fade and slide up
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission with animation feedback
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Contact information items
  const contactInfo = [
    {
      label: "Email",
      value: "sameershaikh64492@gmail.com",
      icon: "📧",
    },
    {
      label: "Phone",
      value: "8383 9513 36",
      icon: "📱",
    },
    {
      label: "Location",
      value: "Delhi, India",
      icon: "📍",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Section heading */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="highlight">Touch</span>
        </motion.h2>

        <div className="contact-content">
          {/* Contact information */}
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="contact-intro">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </motion.p>

            {/* Contact details with hover animations */}
            <div className="contact-details">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-text">
                    <p className="contact-label">{info.label}</p>
                    <p className="contact-value">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div className="social-links" variants={itemVariants}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Name input field with focus animation */}
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 10px rgba(79, 70, 229, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Email input field */}
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 10px rgba(79, 70, 229, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Message textarea */}
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 10px rgba(79, 70, 229, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Submit button with hover animation */}
            <motion.button
              type="submit"
              className="submit-button"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>

            {/* Success message animation */}
            {submitted && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
