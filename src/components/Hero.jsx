import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          Hello, I'm <span className="text-blue-500">Anas Furqan</span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-8">
          A passionate <span className="text-white">Full Stack Developer</span> crafting modern web applications using
          React, Laravel, and more.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-gray-500 text-gray-300 hover:text-white hover:border-white px-6 py-3 rounded-md text-sm transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
