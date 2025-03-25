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
import { Github, Globe, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  longDescription: string;
  period: string; // New field for project time period
}

const projects: Project[] = [
  {
    id: 22,
    title: 'ACADS-BSG HYENA+',
    description: 'Cloud-based hydraulic calculation software for fire protection systems',
    image: '/projects/hyena-plus.webp', // Add an appropriate image file
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Express.js',
      'AWS',
      'Cloud Architecture',
      'Engineering Calculations',
    ],
    liveUrl: 'https://www.acadsbsg.com.au/software/hyena-plus/',
    period: 'Dec 2022 - Present',
    longDescription:
      'Led the development of HYENA+, a cloud-based hydraulic calculation software solution for modern building professionals. This sophisticated engineering tool simplifies complex hydraulic calculations for fire protection systems, allowing engineers to calculate, design, size, and refine fire sprinkler systems, hydrant systems, and hose reel installations with confidence. The software performs complete hydraulic analysis determining flow, pressure drop, and technical data for each pipe in a network, accounting for all user-entered fittings.\n\n' +
      'Key implementation features include: fully cloud-based architecture accessible from anywhere with internet access, support for complex looped and gridded systems, compliance with multiple standards (NFPA, NZ4541, AS2118, SSPC52), intuitive data input screens with helpful features, automatic node assignment, comprehensive pipe material database, automated grid layouts with visualization, and detailed calculation results with summary reports. The application transformed a complex desktop engineering tool into a modern, accessible cloud platform used by thousands of building professionals daily.',
  },
  {
    id: 23,
    title: 'ACADS-BSG CAMEL+',
    description: 'Cloud-based air conditioning load estimation software',
    image: '/projects/camel-plus.webp', // Add an appropriate image file
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Express.js',
      'AWS',
      'Cloud Architecture',
      'Engineering Calculations',
    ],
    liveUrl: 'https://www.acadsbsg.com.au/software/camel-plus/',
    period: 'Dec 2022 - Present',
    longDescription:
      'Spearheaded the development of CAMEL+, a cloud-based comprehensive air conditioning load estimation software used by thousands of engineers throughout Australia, New Zealand, and Southeast Asia. This powerful engineering tool calculates design heating and cooling loads, along with associated psychrometrics for air conditioning plant in buildings. The calculations are based on the AIRAH Design Application Manual DA09 Air Conditioning Load Estimation, incorporating cooling load estimation techniques originally developed by Carrier International Corporation.\n\n' +
      'Key features implemented include: support for multiple HVAC system types (constant/variable air volume, heat pumps, VRF systems, evaporative coolers), multi-zone modeling capability, intuitive visual interfaces for schedules and shading schemes, comprehensive modeling of architectural elements affecting thermal performance, hourly cooling load analysis with thermal storage considerations, psychrometric analysis for air handling units, and detailed results visualization with customizable reporting. The application successfully migrated complex engineering calculations to a user-friendly cloud platform, significantly improving workflow efficiency for building services professionals.',
  },
  {
    id: 1,
    title: 'CrewStudio Admin Dashboard',
    description: 'Full-stack admin dashboard for video content management platform.',
    image: '/projects/crewstudio-admin.webp',
    technologies: ['React.js', 'Next.js', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://crewstudio.com',
    period: 'Jul 2018 - Oct 2024',
    longDescription:
      'Updated and enhanced the admin dashboard for CrewStudio, a platform that enables teams to create collaborative, authentic video content. Implemented new features, improved user interface, and optimized backend performance. The dashboard allows administrators to manage users, projects, and media assets efficiently.',
  },
  {
    id: 10,
    title: 'Informa UK News Platforms',
    description: 'Next.js migration for enterprise news sites from Drupal CMS.',
    image: '/projects/informa-news.webp',
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'GraphQL',
      'Express.js',
      'Drupal API',
      'Tailwind CSS',
    ],
    liveUrl: 'https://www.informationweek.com',
    period: 'Mar 2022 - Dec 2022',
    longDescription:
      "Led the migration of enterprise technology news websites InformationWeek and Dark Reading from legacy Drupal CMS to a modern Next.js architecture. Implemented server-side rendering, incremental static regeneration, and headless CMS integration to improve performance and SEO. Designed responsive layouts, built reusable component libraries, and integrated with Drupal's content API for seamless data transfer. The rebuild resulted in 40% faster page load times, improved core web vitals metrics, and enhanced user experience across all devices.",
  },
  {
    id: 21,
    title: 'Amnesty Decoder: Decode Surveillance NYC',
    description: 'Citizen science platform for mapping CCTV cameras across New York City.',
    image: '/projects/Decode-Surveillance-NYC.webp',
    technologies: ['React.js', 'Next.js', 'Redux', 'CSS', 'Laravel'],
    liveUrl: 'https://decoders.amnesty.org/projects/decode-surveillance',
    period: 'May 2021 - Sept 2021',
    longDescription:
      'Decode Surveillance NYC was launched by Amnesty Decoders in May 2021 as part of their microtasking citizen science initiative for human rights research. Over a ten-week period, more than 7,000 digital volunteers from around the world analyzed every intersection in New York City. The project successfully identified and categorized tens of thousands of CCTV cameras, revealing for the first time which areas of the city are most exposed to surveillance via facial recognition technology. This groundbreaking effort provided crucial data for understanding the scope of public surveillance infrastructure.',
  },
  {
    id: 2,
    title: 'Amnesty Decoder: Strike Tracker',
    description: 'Human rights research platform for investigating airstrikes in Syria.',
    image: '/projects/strike-tracker.webp',
    technologies: ['React.js', 'Next.js', 'Redux', 'CSS', 'Laravel'],
    liveUrl: 'https://decoders.amnesty.org/projects/strike-tracker',
    period: 'Sep 2018 - Dec 2019',
    longDescription:
      "Strike Tracker is part of Amnesty International's investigation into civilian deaths from US-led airstrikes in Raqqa, Syria. The platform enables over 50,000 digital volunteers from 150+ countries to analyze satellite imagery and identify damaged buildings. Developed in collaboration with Focal Labs, the project uses UNITAR satellite data and is powered by Hive and Discourse. A demo is available at https://decoders.amnesty.org/task-presenter/projects/strike-tracker?demo=1",
  },
  {
    id: 3,
    title: 'StreamStudio Dashboard',
    description: 'Control dashboard for professional webcasting platform.',
    image: '/projects/steamstudio.webp',
    technologies: ['React.js', 'Next.js', 'Redux', 'HTML', 'CSS'],
    liveUrl: 'https://www.wtvglobal.com/streamstudio/',
    period: 'May 2018 - Jul 2018',
    longDescription:
      'Developed the frontend interface for StreamStudio, a professional webcast platform dashboard. Created intuitive controls and visualizations for managing live streaming events, monitoring performance metrics, and administering user permissions. The platform offers comprehensive webcasting solutions for corporate and event management clients.',
  },
  {
    id: 4,
    title: 'CrewStudio Mobile App',
    description: 'Collaborative video creation platform for teams and employees.',
    image: '/projects/crewstudio-mobile.webp',
    technologies: ['React Native', 'Redux', 'Java', 'Objective-C', 'Node.js'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.crewstudio.app',
    period: 'Jun 2018 - Dec 2024',
    longDescription:
      'CREWSTUDIO is a mobile app designed to harness the video creation power of employees and teams. It offers easy and low-cost creation of user-generated video for internal communications, sales, marketing and social media amplification. Developed the mobile app for both iOS and Android, and later expanded work to include API development and admin dashboard features. Available on Google Play and App Store with test project code TEST001.',
  },
  {
    id: 5,
    title: 'CookAid',
    description: 'Global recipe discovery and cooking assistant app.',
    image: '/projects/cookaid.webp',
    technologies: ['React Native', 'Expo', 'Redux', 'JavaScript'],
    period: 'Apr 2019 - Jul 2019',
    longDescription:
      'CookAid provides access to thousands of recipes from around the world, organized into categories by food types, diets, and global cuisines. Developed the mobile application with React Native and Expo, implementing features for recipe discovery, step-by-step instructions, and personalized recommendations. The app presents recipes in a simple-to-follow format that can be easily made in any kitchen.',
  },
  {
    id: 6,
    title: 'Glowdawn Messenger',
    description: 'Messaging and VoIP mobile application for Android.',
    image: '/projects/glowdawn.webp',
    technologies: ['Android', 'Java', 'Asterisk', 'Linphone', 'XMPP', 'Firebase'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.glowdawn',
    period: 'Jan 2017 - Nov 2017',
    longDescription:
      'Developed a native Android mobile application for messaging, video calls, and voice calls. Implemented real-time communication features using XMPP protocol, integrated Linphone for VoIP functionality, and used Firebase for push notifications and real-time database. The app provides secure and reliable communication channels for users globally.',
  },
  {
    id: 7,
    title: 'BVPN Mobile App',
    description: 'VPN client application for Android devices.',
    image: '/projects/bvpn-mobile.webp',
    technologies: ['Android', 'Java', 'OpenVPN'],
    liveUrl: 'https://play.google.com/store/apps/details?id=io.borderlessvpn.android',
    period: 'Jan 2018 - Feb 2018',
    longDescription:
      'Developed a mobile VPN client application for Android that provides secure and private internet access. Implemented OpenVPN protocol integration, server selection interface, connection status monitoring, and automatic reconnection features. The app allows users to bypass geo-restrictions and browse the internet securely with enhanced privacy.',
  },
  {
    id: 8,
    title: 'BVPN Desktop App',
    description: 'Cross-platform VPN client for Windows and macOS.',
    image: '/projects/bvpn-desktop.webp',
    technologies: ['Angular 5', 'Node.js', 'Electron.js', 'OpenVPN'],
    liveUrl: 'https://borderlessvpn.io/',
    period: 'Feb 2018 - May 2018',
    longDescription:
      'Created a cross-platform desktop VPN client application using Electron.js that runs on both Windows and macOS. Implemented OpenVPN technology integration, secure connection protocols, server location selection, and connection statistics. The app provides a seamless VPN experience with an intuitive user interface and reliable performance.',
  },
  {
    id: 9,
    title: 'Financial Mobile App',
    description: 'User interface development for a financial services application.',
    image: '/projects/financial-app.webp',
    technologies: ['React Native', 'React.js', 'Redux'],
    period: 'Nov 2018',
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
                <motion.div
                  layoutId={`project-period-${project.id}`}
                  className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.period}
                </motion.div>
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
                <DialogTitle className="flex items-center justify-between">
                  <span>{selectedProject.title}</span>
                  <motion.div
                    layoutId={`project-period-${selectedProject.id}`}
                    className="text-sm font-normal text-gray-500 dark:text-gray-400 flex items-center"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedProject.period}
                  </motion.div>
                </DialogTitle>
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
