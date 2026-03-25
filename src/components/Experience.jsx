import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experiences } from '../data/content';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden">
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
          <span className="badge badge-primary mb-4">Career</span>
          <h2 className="section-title mb-4">
            <span className="text-gray-900 dark:text-white">Leadership & Professional </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My journey through leadership roles and professional development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent lg:-translate-x-px" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.role}-${exp.organization}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 -translate-x-1.5 lg:-translate-x-1.5 mt-8 lg:mt-6">
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} ${
                      exp.current ? 'animate-pulse' : ''
                    }`}
                  />
                  {exp.current && (
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-75`}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pl-12 lg:pl-0 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'
                  }`}
                >
                  <div className="card card-hover p-6">
                    {/* Header */}
                    <div
                      className={`flex flex-wrap items-start gap-3 mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white flex-shrink-0 order-first ${
                          index % 2 === 0 ? 'lg:order-last' : ''
                        }`}
                      >
                        <FiBriefcase className="w-5 h-5" />
                      </div>

                      {/* Title & Organization */}
                      <div className="flex-1 min-w-0">
                        <div
                          className={`flex items-center gap-2 flex-wrap ${
                            index % 2 === 0 ? 'lg:justify-end' : ''
                          }`}
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="badge badge-success text-xs">Current</span>
                          )}
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                          {exp.organization}
                        </p>
                        <span className="inline-block px-2 py-0.5 mt-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div
                      className={`flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : ''
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul
                      className={`space-y-2 text-sm text-gray-600 dark:text-gray-400 ${
                        index % 2 === 0 ? 'lg:text-right' : ''
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    {exp.skills.length > 0 && (
                      <div
                        className={`flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${
                          index % 2 === 0 ? 'lg:justify-end' : ''
                        }`}
                      >
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
