import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMessageSquare, FiSend, FiUser, FiMapPin, FiPhone } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const recaptchaRef = useRef(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      toast.error('Please verify reCAPTCHA!');
      return;
    }
    
    // Simulate form submission
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setCaptchaVerified(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'anasfurqan643@gmail.com',
      href: 'mailto:anasfurqan643@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+92 317 4724801',
      href: 'tel:+923174724801'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/Anas-Furqan',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anas-furqan/',
      color: 'hover:text-blue-600'
    },
    {
      icon: FiMessageSquare,
      label: 'WhatsApp',
      href: 'https://wa.me/+923174724801',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <Toaster 
        position="top-right" 
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#1f2937',
          },
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="relative">
                    <FiUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                      focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-gray-700/60 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent peer"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-12 top-4 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-blue-600 peer-focus:text-sm peer-valid:-top-2 peer-valid:left-4 peer-valid:text-sm peer-valid:text-blue-600">
                      Your Name
                    </label>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="relative">
                    <FiMail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                      focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-gray-700/60 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent peer"
                      placeholder="Your Email"
                    />
                    <label className="absolute left-12 top-4 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-blue-600 peer-focus:text-sm peer-valid:-top-2 peer-valid:left-4 peer-valid:text-sm peer-valid:text-blue-600">
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <div className="relative">
                    <FiMessageSquare className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                      focusedField === 'subject' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-gray-700/60 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent peer"
                      placeholder="Subject"
                    />
                    <label className="absolute left-12 top-4 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-blue-600 peer-focus:text-sm peer-valid:-top-2 peer-valid:left-4 peer-valid:text-sm peer-valid:text-blue-600">
                      Subject
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="relative">
                    <FiMessageSquare className={`absolute left-4 top-6 w-5 h-5 transition-colors duration-200 ${
                      focusedField === 'message' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows="4"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-gray-700/60 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent peer resize-none"
                      placeholder="Your Message"
                    />
                    <label className="absolute left-12 top-4 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-blue-600 peer-focus:text-sm peer-valid:-top-2 peer-valid:left-4 peer-valid:text-sm peer-valid:text-blue-600">
                      Your Message
                    </label>
                  </div>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lc2mn0rAAAAABFIidMg-6krEIyJjWHaAQCsjL3O"
                    onChange={() => setCaptchaVerified(true)}
                    theme="light"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's connect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Follow me on social media
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
