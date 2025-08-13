import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel,
  FaGitAlt, FaGithub, FaBootstrap, FaWordpress, FaNodeJs
} from 'react-icons/fa';
import { SiJquery, SiInertia, SiDotnet, SiMysql, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { name: 'React.js', icon: FaReact, level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', icon: SiTypescript, level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', icon: FaJs, level: 95, color: 'from-yellow-400 to-yellow-500' },
        { name: 'HTML5', icon: FaHtml5, level: 98, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 92, color: 'from-blue-500 to-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: 'from-purple-500 to-purple-600' },
      ]
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Laravel', icon: FaLaravel, level: 88, color: 'from-red-500 to-red-600' },
        { name: 'Node.js', icon: FaNodeJs, level: 85, color: 'from-green-500 to-green-600' },
        { name: 'PHP', icon: FaPhp, level: 90, color: 'from-purple-500 to-purple-600' },
        { name: 'ASP.NET', icon: SiDotnet, level: 80, color: 'from-purple-600 to-purple-700' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'MySQL', icon: SiMysql, level: 88, color: 'from-blue-600 to-blue-700' },
        { name: 'MongoDB', icon: SiMongodb, level: 75, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      title: 'Tools & Others',
      description: 'Essential tools and technologies for development',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', icon: FaGithub, level: 90, color: 'from-gray-700 to-gray-800' },
        { name: 'Inertia.js', icon: SiInertia, level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'WordPress', icon: FaWordpress, level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'jQuery', icon: SiJquery, level: 85, color: 'from-blue-500 to-blue-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-800 dark:to-gray-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

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
            Skills & Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Technical Proficiency
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set built through years of experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 dark:border-gray-700/20 shadow-xl"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-600/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
                            <skill.icon className="w-6 h-6" />
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Additional Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Other technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'REST APIs', 'GraphQL', 'Docker', 'AWS', 'Firebase', 'Redux',
              'Next.js', 'Vue.js', 'Sass', 'Webpack', 'Jest', 'Cypress'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
