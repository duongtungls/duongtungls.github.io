import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';
import FloatingNav from '@/components/floating-nav';

// Dynamically import non-critical components
const About = dynamic(() => import('@/components/About'));
const Experience = dynamic(() => import('@/components/Experience'));
const Skills = dynamic(() => import('@/components/Skills'));
const Services = dynamic(() => import('@/components/Services'));
const Projects = dynamic(() => import('@/components/Projects'));
const Education = dynamic(() => import('@/components/Education'));
const Contact = dynamic(() => import('@/components/Contact'));

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
