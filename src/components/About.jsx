import { motion } from 'framer-motion';
import { stats, highlights, aboutSkills, coreTechnologies } from '../data/content';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
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
          <span className="badge badge-primary mb-4">About Me</span>
          <h2 className="section-title mb-4">
            <span className="text-gray-900 dark:text-white">Crafting Digital </span>
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="section-subtitle">
            I'm a passionate full-stack developer who transforms ideas into elegant,
            functional, and user-centric web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-6 overflow-hidden">
              {/* Code Window Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono ml-2">
                  developer.js
                </span>
              </div>

              {/* Code Content */}
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-gray-800 dark:text-gray-200">
                  <span className="text-blue-600 dark:text-blue-400">const</span>{' '}
                  <span className="text-violet-600 dark:text-violet-400">developer</span> = {'{'}
                  {'\n'}
                  {'  '}name:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Anas Furqan'</span>,
                  {'\n'}
                  {'  '}role:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    'Full Stack Developer'
                  </span>
                  ,{'\n'}
                  {'  '}skills: [
                  <span className="text-emerald-600 dark:text-emerald-400">
                    'React'
                  </span>
                  ,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Laravel'</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Node.js'</span>],
                  {'\n'}
                  {'  '}passion:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    'Building amazing experiences'
                  </span>
                  ,{'\n'}
                  {'  '}available:{' '}
                  <span className="text-blue-600 dark:text-blue-400">true</span>
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a dedicated full-stack developer with a passion for creating
                innovative web solutions. With expertise in modern technologies like
                React, Laravel, and Node.js, I bring ideas to life through clean,
                efficient code and intuitive user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community. I believe in continuous learning and staying ahead
                of industry trends.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Technical Expertise
              </h4>
              {aboutSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-3 gap-6 mb-20"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={fadeInUp}
              className="card card-hover text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white">
                <highlight.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="card text-center py-8"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center"
        >
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
            Core Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {coreTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
