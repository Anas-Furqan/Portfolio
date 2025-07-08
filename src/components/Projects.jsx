import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Nail Art',
    description: 'A full-stack Laravel + React-based app to manage customer ledgers, generate bills, and track outstanding dues.',
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
    tech: ['PHP', 'Laravel', 'React.js', 'Inertia.js'],
    image: '/projects/khata-app.PNG',
    github: 'https://github.com/Anas-Furqan/khata-app',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform"
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
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
