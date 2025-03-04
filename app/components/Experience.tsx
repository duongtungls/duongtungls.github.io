'use client';

import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSectionHeader from './AnimatedSectionHeader';

const experiences = [
  {
    company: 'Amplifi & Impact Ltd',
    location: 'Hanoi, Vietnam',
    period: 'December 2024 - Present',
    role: 'Senior Full-stack Developer',
    responsibilities: [
      'Leading full-stack development projects',
      'Architecting scalable web applications',
      'Implementing modern frontend frameworks and backend technologies',
      'Collaborating with cross-functional teams',
    ],
  },
  {
    company: 'Peppermint Innovation Limited',
    location: 'Hanoi, Vietnam',
    period: 'December 2023 - December 2024',
    role: 'Senior Full-stack Developer',
    responsibilities: [
      'Developed and maintained full-stack applications',
      'Worked with modern JavaScript frameworks',
      'Implemented responsive designs and backend APIs',
      'Collaborated with teams to deliver high-quality software solutions',
    ],
  },
  {
    company: 'Xpon Technologies',
    location: 'Hanoi, Vietnam',
    period: 'January 2021 - December 2023',
    role: 'Full-stack Developer',
    responsibilities: [
      'Built and maintained web applications using modern technologies',
      'Implemented frontend interfaces with React and backend systems with Node.js',
      'Worked with databases and API design',
      'Collaborated in an Agile development environment',
    ],
  },
  {
    company: 'Holoscribe',
    location: 'Remote',
    period: 'June 2020 - December 2020',
    role: 'Full Stack Developer, Mobile Developer',
    responsibilities: [
      'Developed both web and mobile applications',
      'Implemented full-stack solutions with modern frameworks',
      'Worked on cross-platform mobile development',
      'Created responsive and user-friendly interfaces',
    ],
  },
  {
    company: 'Focal Labs Limited',
    location: 'London, United Kingdom',
    period: 'April 2018 - December 2019',
    role: 'Fullstack Developer',
    responsibilities: [
      'Developed full-stack web applications',
      'Worked with JavaScript frameworks and backend technologies',
      'Implemented database solutions and API integrations',
      'Participated in the full software development lifecycle',
    ],
  },
  {
    company: 'Freelancer.com',
    location: 'Remote',
    period: 'August 2017 - March 2018',
    role: 'Mobile Developer',
    responsibilities: [
      'Developed mobile applications for various clients',
      'Created cross-platform solutions using React Native',
      'Designed and implemented UI/UX for mobile interfaces',
      'Collaborated directly with clients to deliver customized solutions',
    ],
  },
  {
    company: 'GaneshAID Non-profit Consultancy Company',
    location: 'Hanoi, Vietnam',
    period: 'October 2016 - August 2017',
    role: 'IT Specialist',
    responsibilities: [
      'Managed IT infrastructure and systems',
      'Developed and maintained web applications',
      'Provided technical support and solutions',
      'Implemented digital strategies for non-profit initiatives',
    ],
  },
  {
    company: 'Freelancer.com',
    location: 'Remote',
    period: 'January 2014 - October 2016',
    role: 'Web Developer',
    responsibilities: [
      'Developed websites using PHP, WordPress, HTML, JS, and CSS',
      'Created custom WordPress themes and plugins',
      'Implemented responsive designs and user interfaces',
      'Worked directly with clients to deliver web solutions',
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
