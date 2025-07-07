import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaUniversity, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function Education() {
  const leftEducation = [
      {
        degree: 'Advance Diploma in Software Engineering',
        institute: 'Aptech Learning Garden Center',
        duration: '2022-2025',
        icon: <FaLaptopCode className="text-blue-500 text-xl" />,
      },
    // {
    //   degree: 'Matriculation – Computer Science',
    //   institute: 'The City School',
    //   duration: '2017 - 2019',
    //   icon: <FaSchool className="text-blue-500 text-xl" />,
    // },
  ];

  const rightEducation = [
    {
      degree: 'Intermediate – Computer Science',
      institute: 'Bahria College Karsaz',
      duration: '2023-2025',
      icon: <FaGraduationCap className="text-blue-500 text-xl" />,
    },
    {
      degree: 'Matriculation – Computer Science',
      institute: 'Al-Badar Higher Secondary School',
      duration: '2021-2023',
      icon: <FaSchool className="text-blue-500 text-xl" />,
    },
  ];

  return (
    <section id="education" className="bg-gray-950 text-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
          {/* Left Side */}
          <div className="space-y-8">
            {leftEducation.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <p className="text-gray-300">{item.institute}</p>
                  <p className="text-sm text-gray-500">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            {rightEducation.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <p className="text-gray-300">{item.institute}</p>
                  <p className="text-sm text-gray-500">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
