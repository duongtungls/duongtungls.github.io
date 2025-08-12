'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Zap, Smartphone, Brain } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-pink-500" />,
      title: 'AI & ML',
      description: 'LLMs, Ollama, Stable Diffusion, HuggingFace, Langchain, N8N',
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Frontend',
      description: 'React, Next.js, Redux, Three.js',
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Backend',
      description: 'Node.js, Express, Laravel',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile',
      description: 'React Native, Android, Expo, Native Modules',
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database',
      description: 'MongoDB, Mongoose, PostgreSQL, MySQL, Supabase, Firebase',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance',
      description: 'Optimization, Caching',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <motion.div
            className="xl:w-1/2 mb-8 xl:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I&apos;m a full-stack developer with a passion for crafting elegant solutions to
              complex problems. Specializing in JavaScript ecosystems, I blend technical expertise
              with creative thinking to build applications that not only function flawlessly but
              also delight users with their intuitive design and performance.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Since late 2023, I&apos;ve been deeply fascinated by artificial intelligence and its
              creative applications. I actively use AI for content creation—generating images,
              videos, and even music. I&apos;m particularly enthusiastic about working with Open
              Source LLMs and other language models to enhance my productivity and workflow. This
              passion has driven me to continuously expand my knowledge in the AI field, with the
              goal of becoming an AI expert.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond coding, I&apos;m an avid marathoner who applies the same discipline and
              persistence to software development that I bring to long-distance running. This
              mindset helps me tackle challenging projects with endurance and precision, always
              pushing toward excellence while maintaining a balanced perspective on both technical
              achievements and user needs.
            </p>
          </motion.div>
          <motion.div
            className="xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/hero/tung-photos/02.webp"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
