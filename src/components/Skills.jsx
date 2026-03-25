import { motion } from 'framer-motion';
import { skillCategories, additionalSkills } from '../data/content';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-gray-950" />

      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="badge badge-primary mb-4">Skills & Expertise</span>
          <h2 className="section-title mb-4">
            <span className="text-gray-900 dark:text-white">Technical </span>
            <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive skill set built through years of experience and continuous
            learning
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              variants={fadeInUp}
              className="glass-card p-6 lg:p-8"
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="card card-hover p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} text-white`}
                        >
                          <skill.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                            {skill.name}
                          </h4>
                        </div>
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeInUp}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Additional Skills
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Other technologies and tools I work with
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
