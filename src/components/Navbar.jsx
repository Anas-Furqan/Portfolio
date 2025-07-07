import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-950/60 border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Anas<span className="text-blue-500">.</span>
        </h1>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          <a href="/resume.pdf" target="_blank" className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
