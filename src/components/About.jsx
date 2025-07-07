import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a full stack developer with strong experience in building modern web applications using React.js,
            Laravel, and JavaScript. I love clean code, responsive UI, and solving real-world problems through tech.
          </p>
          <h3 className="text-lg font-semibold mb-2">Technologies I Use:</h3>
          <div className="flex justify-center md:justify-start gap-4 text-3xl text-blue-500">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaJs title="JavaScript" />
            <FaReact title="React.js" />
            <FaLaravel title="Laravel" />
            <FaGithub title="GitHub" />
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/pic2.png" 
            alt="Anas Furqan"
            className="w-60 h-60 object-cover rounded-2xl shadow-lg border-2 border-blue-600"
          />
        </motion.div>
      </div>
    </section>
  );
}
