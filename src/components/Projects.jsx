import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiEye, FiCode } from 'react-icons/fi';

const allProjects = [
  {
    title: 'Nail Art Studio',
    description: 'A responsive and elegant landing page for a nail art studio, crafted with modern web technologies and beautiful animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/nail-art.PNG',
    github: 'https://github.com/Anas-Furqan/Nail-Art',
    demo: 'https://anas-furqan.github.io/Nail-Art/',
    category: 'Frontend',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, Tailwind, Framer Motion, and fully responsive layout with modern design.',
    tech: ['React.js', 'Tailwind', 'Framer Motion'],
    image: '/projects/portfolio.PNG',
    github: 'https://github.com/Anas-Furqan/Portfolio',
    demo: 'https://portfolio-anasfurqan.vercel.app',
    category: 'Frontend',
    featured: true
  },
  {
    title: 'Cloth Inventory Management',
    description: 'A full-stack Laravel + React-based app to manage customer ledgers, generate bills, and track outstanding dues.',
    tech: ['PHP', 'Laravel', 'React.js', 'Inertia.js', 'MySQL'],
    image: '/projects/khata-app.PNG',
    github: 'https://github.com/Anas-Furqan/khata-app',
    demo: '#',
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'Decor Vista',
    description: 'A full-stack eCommerce web application for a home decor brand, built with Laravel featuring dynamic product management.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/decorvista.PNG',
    github: 'https://github.com/Anas-Furqan/DecorVIsta',
    demo: '#',
    category: 'Full Stack',
    featured: false
  },
  {
    title: 'The Book Platform',
    description: 'A Laravel-based platform where authors can register and publish their books, featuring secure authentication.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/thebook.PNG',
    github: 'https://github.com/Anas-Furqan/TheBook',
    demo: '#',
    category: 'Full Stack',
    featured: false
  },
  {
    title: 'Plant Nest',
    description: 'A Laravel-powered eCommerce platform dedicated to selling plants and related accessories with seamless experience.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/plantnest.PNG',
    github: 'https://github.com/Anas-Furqan/PlantNest',
    demo: '#',
    category: 'Full Stack',
    featured: false
  },
  {
    title: 'Task Management App',
    description: 'A modern task management application built with React and Node.js, featuring real-time updates and team collaboration.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    category: 'Full Stack',
    featured: false
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with real-time data, interactive charts, and location-based forecasts.',
    tech: ['React.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    category: 'Frontend',
    featured: false
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with user authentication, file sharing, and group chat functionality.',
    tech: ['React.js', 'Socket.io', 'Express.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    category: 'Full Stack',
    featured: false
  }
];

const categories = ['All', 'Frontend', 'Full Stack'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

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
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my recent work showcasing my skills in web development and design
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-2 border border-white/20 dark:border-gray-700/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <FiCode className="w-4 h-4 text-gray-400" />
                        <FiEye className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200/50 dark:border-blue-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show More (${filteredProjects.length - 6} more)`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
