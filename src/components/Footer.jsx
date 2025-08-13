import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/Anas-Furqan',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/anas-furqan/',
      label: 'LinkedIn'
    },
    {
      icon: FiMail,
      href: 'mailto:anasfurqan643@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-700 dark:text-gray-300 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Anas Furqan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              A passionate full-stack developer dedicated to creating innovative web solutions 
              and bringing digital ideas to life through clean, efficient code and beautiful design.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Contact</h4>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white font-medium">Email:</span><br />
                anasfurqan643@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white font-medium">Location:</span><br />
                Pakistan
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white font-medium">Available:</span><br />
                For freelance work
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Anas Furqan. All rights reserved.</span>
            <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Made with</span>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">React</span>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">Tailwind</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Framer</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
