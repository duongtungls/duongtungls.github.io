'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform-demo.com',
    longDescription:
      'This e-commerce platform provides a seamless shopping experience with real-time inventory updates, secure payment processing, and an intuitive admin dashboard. It features a responsive design, optimized performance, and integration with popular payment gateways.',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/task-management-app',
    liveUrl: 'https://task-app-demo.com',
    longDescription:
      'This task management application allows teams to collaborate efficiently with real-time updates, drag-and-drop task organization, and automated notifications. It includes features like task assignment, due date tracking, and progress visualization to enhance productivity.',
  },
  {
    id: 3,
    title: 'Weather Forecast Dashboard',
    description: 'An interactive weather forecast dashboard with data visualization.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'D3.js', 'OpenWeatherMap API', 'Styled Components'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
    longDescription:
      'This weather forecast dashboard provides users with detailed weather information and interactive data visualizations. It features a 7-day forecast, hourly predictions, and historical weather data analysis. The app uses geolocation for accurate local forecasts and allows users to save multiple locations.',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div layoutId={`project-image-${project.id}`}>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <div className="p-4">
                <motion.h3
                  layoutId={`project-title-${project.id}`}
                  className="text-xl font-semibold mb-2 dark:text-white"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`project-description-${project.id}`}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <motion.div layoutId={`project-image-${selectedProject.id}`}>
                <Image
                  src={selectedProject.image || '/placeholder.svg'}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-md"
                />
              </motion.div>
              <DialogDescription>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {selectedProject.longDescription}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  {selectedProject.githubUrl && (
                    <Button asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button asChild variant="outline">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
