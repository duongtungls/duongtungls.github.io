'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Layout,
  Server,
  Smartphone,
  Globe,
  Database,
  Zap,
  ArrowRightCircle,
} from 'lucide-react';
import Image from 'next/image';
import AnimatedSectionHeader from './AnimatedSectionHeader';

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: 'Web Application Development',
      description:
        'Modern, performant web applications built with React and Next.js. I create intuitive user interfaces that convert visitors into customers with seamless interactions and responsive design.',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile applications using React Native and Expo. I deliver native-feeling iOS and Android apps from a single codebase, maximizing efficiency without compromising on quality.',
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: 'Backend Development',
      description:
        'Scalable and efficient server-side solutions with Node.js, Express, and Fastify. I build robust APIs and microservices that power your applications with reliability and performance.',
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'Database Design & Integration',
      description:
        'Optimized database architecture using MongoDB, PostgreSQL, MySQL and cloud solutions like Supabase and Firebase. I design schemas that ensure data integrity while maintaining fast query performance.',
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Performance Optimization',
      description:
        'Speed up your existing applications through code analysis, optimization techniques, and implementing best practices. I improve load times, responsiveness, and overall user experience.',
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'Full-Stack Development',
      description:
        'End-to-end development solutions from concept to deployment. I handle the entire technical stack, ensuring seamless integration between frontend interfaces and backend systems.',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="My Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4">{service.description}</p>

              <div className="mt-6 flex justify-end">
                <motion.div
                  className="text-blue-600 dark:text-blue-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2 text-sm font-medium">Learn more</span>
                  <ArrowRightCircle className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image
          src="https://picsum.photos/256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="https://picsum.photos/256?random=2"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
