'use client';

import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSectionHeader from './AnimatedSectionHeader';

const experiences = [
  {
    company: 'Freelance',
    location: 'Remote',
    period: '2024 - Present',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developing custom web applications for international clients',
      'Building responsive and scalable frontend interfaces with React',
      'Implementing secure backend systems with Node.js and Express',
      'Creating RESTful APIs and managing databases',
      'Collaborating with clients to deliver high-quality solutions',
    ],
  },
  {
    company: 'Tech Innovation Inc.',
    location: 'Ho Chi Minh City, Vietnam',
    period: '2022 - 2024',
    role: 'Senior Software Engineer',
    responsibilities: [
      'Led development of a large-scale e-commerce platform',
      'Implemented microservices architecture using Node.js and Docker',
      'Optimized database queries and improved application performance',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with cross-functional teams to deliver projects on time',
    ],
  },
  {
    company: 'StartUp Solutions',
    location: 'Hanoi, Vietnam',
    period: '2020 - 2022',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developed and maintained multiple web applications using MERN stack',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Integrated third-party APIs and services',
      'Participated in Agile development processes and sprint planning',
      "Contributed to the company's internal tool development",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
              </div>
              <div className="w-5/12">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{exp.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="mb-1">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="https://picsum.photos/256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
