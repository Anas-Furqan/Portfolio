import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel,
  FaGitAlt, FaGithub, FaBootstrap, FaWordpress
} from 'react-icons/fa';

import { SiJquery, SiInertia, SiDotnet } from 'react-icons/si';


export default function Skills() {
  const skills = {
    Frontend: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'jQuery', icon: <SiJquery /> },
    ],
    Backend: [
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Laravel', icon: <FaLaravel /> },
      { name: 'ASP.NET', icon: <SiDotnet /> },
    ],
    Tools: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Inertia.js', icon: <SiInertia /> },
      { name: 'WordPress', icon: <FaWordpress /> },
    ]
  };

  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-gray-700 transition"
                  >
                    <span className="text-blue-500 text-lg">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
