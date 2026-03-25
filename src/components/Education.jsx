import { motion } from 'framer-motion';
import { education } from '../data/content';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50" />

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
          <span className="badge badge-primary mb-4">Education</span>
          <h2 className="section-title mb-4">
            <span className="text-gray-900 dark:text-white">Academic </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            My educational background that shapes my expertise
          </p>
        </motion.div>

        {/* Education Timeline - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-6 lg:p-8">
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-5 top-12 w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
                  )}

                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {item.degree}
                        </h4>
                        <span
                          className={`flex-shrink-0 badge text-xs ${
                            item.status === 'Completed'
                              ? 'badge-success'
                              : 'badge-primary'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {item.institute}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {item.duration}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
