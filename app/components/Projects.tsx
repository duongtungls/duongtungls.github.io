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
    title: 'CrewStudio Admin Dashboard',
    description: 'Full-stack admin dashboard for video content management platform.',
    image: '/projects/crewstudio-admin.jpg', // Replace with actual image
    technologies: ['React.js', 'Next.js', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://crewstudio.com',
    longDescription:
      'Updated and enhanced the admin dashboard for CrewStudio, a platform that enables teams to create collaborative, authentic video content. Implemented new features, improved user interface, and optimized backend performance. The dashboard allows administrators to manage users, projects, and media assets efficiently.',
  },
  {
    id: 2,
    title: 'Amnesty Decoder: Strike Tracker',
    description: 'Human rights research platform for investigating airstrikes in Syria.',
    image: '/projects/strike-tracker.jpg', // Replace with actual image
    technologies: ['React.js', 'Next.js', 'Redux', 'CSS'],
    liveUrl: 'https://decoders.amnesty.org/projects/strike-tracker',
    longDescription:
      "Strike Tracker is part of Amnesty International's investigation into civilian deaths from US-led airstrikes in Raqqa, Syria. The platform enables over 50,000 digital volunteers from 150+ countries to analyze satellite imagery and identify damaged buildings. Developed in collaboration with Focal Labs, the project uses UNITAR satellite data and is powered by Hive and Discourse. A demo is available at https://decoders.amnesty.org/task-presenter/projects/strike-tracker?demo=1",
  },
  {
    id: 3,
    title: 'StreamStudio Dashboard',
    description: 'Control dashboard for professional webcasting platform.',
    image: '/projects/steamstudio.jpg', // Replace with actual image
    technologies: ['React.js', 'Next.js', 'Redux', 'HTML', 'CSS'],
    liveUrl: 'https://www.wtvglobal.com/streamstudio/',
    longDescription:
      'Developed the frontend interface for StreamStudio, a professional webcast platform dashboard. Created intuitive controls and visualizations for managing live streaming events, monitoring performance metrics, and administering user permissions. The platform offers comprehensive webcasting solutions for corporate and event management clients.',
  },
  {
    id: 4,
    title: 'CrewStudio Mobile App',
    description: 'Collaborative video creation platform for teams and employees.',
    image: '/projects/crewstudio-mobile.jpg', // Replace with actual image
    technologies: ['React Native', 'Redux', 'Java', 'Objective-C', 'Node.js'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.crewstudio.app',
    longDescription:
      'CREWSTUDIO is a mobile app designed to harness the video creation power of employees and teams. It offers easy and low-cost creation of user-generated video for internal communications, sales, marketing and social media amplification. Developed the mobile app for both iOS and Android, and later expanded work to include API development and admin dashboard features. Available on Google Play and App Store with test project code TEST001.',
  },
  {
    id: 5,
    title: 'CookAid',
    description: 'Global recipe discovery and cooking assistant app.',
    image: '/projects/cookaid.jpg', // Replace with actual image
    technologies: ['React Native', 'Expo', 'Redux', 'JavaScript'],
    longDescription:
      'CookAid provides access to thousands of recipes from around the world, organized into categories by food types, diets, and global cuisines. Developed the mobile application with React Native and Expo, implementing features for recipe discovery, step-by-step instructions, and personalized recommendations. The app presents recipes in a simple-to-follow format that can be easily made in any kitchen.',
  },
  {
    id: 6,
    title: 'Glowdawn Messenger',
    description: 'Messaging and VoIP mobile application for Android.',
    image: '/projects/glowdawn.jpg', // Replace with actual image
    technologies: ['Android', 'Java', 'Asterisk', 'Linphone', 'XMPP', 'Firebase'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.glowdawn',
    longDescription:
      'Developed a native Android mobile application for messaging, video calls, and voice calls. Implemented real-time communication features using XMPP protocol, integrated Linphone for VoIP functionality, and used Firebase for push notifications and real-time database. The app provides secure and reliable communication channels for users globally.',
  },
  {
    id: 7,
    title: 'BVPN Mobile App',
    description: 'VPN client application for Android devices.',
    image: '/projects/bvpn-mobile.jpg', // Replace with actual image
    technologies: ['Android', 'Java', 'OpenVPN'],
    liveUrl: 'https://play.google.com/store/apps/details?id=io.borderlessvpn.android',
    longDescription:
      'Developed a mobile VPN client application for Android that provides secure and private internet access. Implemented OpenVPN protocol integration, server selection interface, connection status monitoring, and automatic reconnection features. The app allows users to bypass geo-restrictions and browse the internet securely with enhanced privacy.',
  },
  {
    id: 8,
    title: 'BVPN Desktop App',
    description: 'Cross-platform VPN client for Windows and macOS.',
    image: '/projects/bvpn-desktop.jpg', // Replace with actual image
    technologies: ['Angular 5', 'Node.js', 'Electron.js', 'OpenVPN'],
    liveUrl: 'https://borderlessvpn.io/',
    longDescription:
      'Created a cross-platform desktop VPN client application using Electron.js that runs on both Windows and macOS. Implemented OpenVPN technology integration, secure connection protocols, server location selection, and connection statistics. The app provides a seamless VPN experience with an intuitive user interface and reliable performance.',
  },
  {
    id: 9,
    title: 'Financial Mobile App',
    description: 'User interface development for a financial services application.',
    image: '/projects/financial-app.jpg', // Replace with actual image
    technologies: ['React Native', 'React.js', 'Redux'],
    longDescription:
      'Developed the user interface for a financial services mobile application using React Native. Created intuitive navigation flows, responsive layouts, and interactive components for account management, transaction history, financial planning tools, and secure authentication. The project focused on delivering a seamless and professional user experience for financial management on mobile devices.',
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
