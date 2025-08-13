import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiHeart, FiTarget, FiAward, FiUsers, FiGlobe, FiZap, FiTrendingUp } from 'react-icons/fi';

export default function About() {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: FiCode },
    { number: '50+', label: 'Projects Completed', icon: FiTarget },
    { number: '100%', label: 'Client Satisfaction', icon: FiHeart },
    { number: '∞', label: 'Cups of Coffee', icon: FiCoffee },
  ];

  const highlights = [
    {
      icon: FiAward,
      title: 'Problem Solver',
      description: 'Analytical approach to complex technical challenges'
    },
    {
      icon: FiUsers,
      title: 'Team Player',
      description: 'Excellent collaboration and communication skills'
    },
    {
      icon: FiGlobe,
      title: 'Global Mindset',
      description: 'Experience working with international teams'
    }
  ];

  const skills = [
    { name: 'Frontend Development', percentage: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend Development', percentage: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'Database Design', percentage: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'DevOps & Deployment', percentage: 80, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

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
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Crafting Digital Experiences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer who transforms ideas into elegant, functional, and user-centric web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Technical Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl scale-110"></div>
              
              {/* Technical Image Container */}
              <motion.div
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Technical Background Image */}
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center"
                    alt="Technology and Development"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center';
                    }}
                  />
                  
                  {/* Overlay with Code */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <code className="text-xs text-green-400">
                          <span className="text-blue-400">const</span> developer = {'{'}
                          <br />
                          &nbsp;&nbsp;name: <span className="text-yellow-400">'Anas Furqan'</span>,
                          <br />
                          &nbsp;&nbsp;role: <span className="text-yellow-400">'Full Stack Developer'</span>,
                          <br />
                          &nbsp;&nbsp;passion: <span className="text-yellow-400">'Creating amazing web experiences'</span>
                          <br />
                          {'}'};
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Available for Work Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-semibold">Available for Work</span>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FiZap className="w-6 h-6 text-yellow-400" />
                </motion.div>
                
                <motion.div
                  className="absolute top-16 right-8 p-3 bg-white/20 backdrop-blur-sm rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <FiTrendingUp className="w-6 h-6 text-green-400" />
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-80"
                animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a dedicated full-stack developer with a passion for creating innovative web solutions. 
                With expertise in modern technologies like React, Laravel, and Node.js, I bring ideas to life 
                through clean, efficient code and intuitive user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                ahead of industry trends.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Technical Expertise
              </h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-700/20 text-center"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-3">
                    <highlight.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.number}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Core Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Laravel', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Docker'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
