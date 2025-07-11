import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const allProjects = [
  {
    title: 'Nail Art',
    description: 'A responsive and elegant landing page for a nail art studio, crafted with HTML, CSS, and vanilla JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: './projects/nail-art.PNG',
    github: 'https://github.com/Anas-Furqan/Nail-Art',
    demo: 'https://anas-furqan.github.io/Nail-Art/',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, Tailwind, Framer Motion, and fully responsive layout.',
    tech: ['React.js', 'Tailwind', 'Framer Motion'],
    image: './projects/portfolio.PNG',
    github: 'https://github.com/Anas-Furqan/Portfolio',
    demo: 'https://portfolio-anasfurqan.vercel.app',
  },
  {
    title: 'Cloth Inventory Management',
    description: 'A full-stack Laravel + React-based app to manage customer ledgers, generate bills, and track outstanding dues.',
    tech: ['PHP', 'Laravel', 'React.js', 'Inertia.js',  'MySQL'],
    image: '/projects/khata-app.PNG',
    github: 'https://github.com/Anas-Furqan/khata-app',
    demo: '#',
  },
  {
    title: 'Decor Vista',
    description: 'A full-stack eCommerce web application for a home decor brand, built with Laravel featuring dynamic product management, cart, and checkout functionality.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/decorvista.PNG',
    github: 'https://github.com/Anas-Furqan/DecorVIsta',
    demo: '#',
  },
  {
    title: 'The Book',
    description: 'A Laravel-based platform where authors can register and publish their books, featuring secure authentication and dynamic content management.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/thebook.PNG',
    github: 'https://github.com/Anas-Furqan/TheBook',
    demo: '#',
  },
  {
    title: 'Plant Nest',
    description: 'A Laravel-powered eCommerce platform dedicated to selling plants and related accessories, offering seamless browsing, cart, and checkout experience.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/plantnest.PNG',
    github: 'https://github.com/Anas-Furqan/PlantNest',
    demo: '#',
  },
];

const uniqueTechs = [...new Set(allProjects.flatMap(p => p.tech))];

export default function Projects() {
  const [selectedTechs, setSelectedTechs] = useState([]);

  const handleCheckboxChange = (tech) => {
    setSelectedTechs(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const filteredProjects = allProjects.filter(project =>
    selectedTechs.every(tech => project.tech.includes(tech))
  );

  const projectsToDisplay = selectedTechs.length > 0 ? filteredProjects : allProjects;

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Projects</h2>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-12">
          <details className="relative w-64">
            <summary className="cursor-pointer bg-gray-800 text-sm px-4 py-3 rounded-md shadow-md hover:bg-gray-700 transition">
              Filter by Technologies
            </summary>
            <div className="absolute z-10 mt-2 w-full bg-gray-800 border border-gray-700 rounded-md max-h-64 overflow-y-auto shadow-lg">
              {uniqueTechs.map((tech, i) => (
                <label key={i} className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTechs.includes(tech)}
                    onChange={() => handleCheckboxChange(tech)}
                    className="mr-2 accent-blue-500"
                  />
                  {tech}
                </label>
              ))}
            </div>
          </details>
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {projectsToDisplay.length > 0 ? (
              projectsToDisplay.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                      >
                        <FaGithub /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="text-center text-gray-400 col-span-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No projects found for selected technologies.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
