import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            action="https://formsubmit.co/your@email.com" // Replace with your email
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Socials */}
          <div className="space-y-6 text-gray-300">
            <p>
              You can reach out to me anytime via email or on my social profiles.
              I'm open to freelance projects, collaborations, or just a friendly hello!
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500" />
              <span>anasfurqan643@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-white text-gray-400 flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-white text-gray-400 flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
