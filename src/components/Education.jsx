import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiUser, FiCode, FiAward, FiHome } from 'react-icons/fi';

export default function Education() {
  const education = [
    {
      degree: 'Bachelors in Computer Science',
      institute: 'FAST-NUCES',
      duration: 'July 2025 - Present',
      description: 'Pursuing comprehensive computer science education with focus on software engineering, algorithms, and modern development practices.',
      icon: FiHome,
      status: 'In Progress',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Advance Diploma in Software Engineering',
      institute: 'Aptech Learning Garden Center',
      duration: '2022 - 2025',
      description: 'Comprehensive software engineering program covering modern development practices, algorithms, and full-stack development.',
      icon: FiCode,
      status: 'In Progress',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'Intermediate – Computer Science',
      institute: 'Bahria College Karsaz',
      duration: '2023 - 2025',
      description: 'Advanced computer science studies with focus on programming fundamentals and software development principles.',
      icon: FiUser,
      status: 'Completed',
      color: 'from-green-500 to-emerald-500'
    },
    {
      degree: 'Matriculation – Computer Science',
      institute: 'Al-Badar Higher Secondary School',
      duration: '2021 - 2023',
      description: 'Foundation in computer science and mathematics, establishing core academic principles.',
      icon: FiBook,
      status: 'Completed',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certifications = [
    {
      name: 'React.js Development',
      issuer: 'Meta',
      date: '2024',
      icon: FiAward,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Web Development Fundamentals',
      issuer: 'freeCodeCamp',
      date: '2023',
      icon: FiAward,
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'JavaScript Algorithms',
      issuer: 'HackerRank',
      date: '2023',
      icon: FiAward,
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <section id="education" className="relative py-20 px-6 overflow-hidden">
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
            Education & Certifications
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My educational background and professional certifications that shape my expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Education Timeline
              </h3>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {item.degree}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Completed' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          {item.institute}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                          {item.duration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Certifications & Achievements
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-600/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <cert.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {cert.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Continuous Learning
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I'm committed to staying updated with the latest technologies and best practices 
                  through continuous learning and professional development.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
