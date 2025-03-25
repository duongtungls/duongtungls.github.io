'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';

const Background3D = dynamic(() => import('./Background3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>
  ),
});

// Image slider component with animation
const ImageStack = () => {
  const images = [
    '/hero/tung-photos/portrait-hero.webp',
    '/hero/tung-photos/01.webp',
    '/hero/tung-photos/02.webp',
    // '/hero/tung-photos/03.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forwards, -1 for backwards

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % images.length;
        setDirection(1); // Always move forward for auto-rotation
        return nextIndex;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl transform rotate-6 opacity-50 shadow-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl transform -rotate-6 opacity-50 shadow-xl"></div>

      {/* Main card container with perspective */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl perspective-500 h-[384px] w-[384px]">
        {/* Stack of cards */}
        <AnimatePresence>
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            // Skip rendering images that aren't the active, previous, or next ones
            if (!isActive && !isPrevious && !isNext) return null;

            return (
              <motion.div
                key={image}
                className="absolute inset-0 rounded-2xl overflow-hidden"
                initial={{
                  opacity: 0,
                  rotateY: direction > 0 ? 90 : -90,
                  scale: 0.8,
                  zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                }}
                animate={{
                  opacity: isActive ? 1 : isPrevious || isNext ? 0.5 : 0,
                  rotateY: isActive ? 0 : isPrevious ? -30 : 30,
                  scale: isActive ? 1 : 0.85,
                  zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                  translateX: isActive ? 0 : isPrevious ? '-10%' : '10%',
                }}
                exit={{
                  opacity: 0,
                  rotateY: direction > 0 ? -90 : 90,
                  scale: 0.8,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.7,
                }}
              >
                <Image
                  src={image}
                  alt="Duong Cong Tung"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority={isActive}
                />
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm font-medium">Duong Cong Tung</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Image indicator dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Typing text animation component
const TypingText = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const currentText = texts[currentIndex];

    // Logic for typing and deleting
    if (!isDeleting && displayText === currentText) {
      // Pause at full text
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      // Change to next text
      setIsDeleting(false);
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    } else {
      // Typing or deleting animation
      timeout = setTimeout(
        () => {
          const nextChar = isDeleting
            ? displayText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1);

          setDisplayText(nextChar);
        },
        isDeleting ? 50 : 120
      ); // Faster deletion than typing
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <div className="h-8 flex items-center justify-center">
      <motion.span
        className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        key={displayText} // Re-render on text change
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block ml-1 w-[3px] h-6 bg-current"
        />
      </motion.span>
    </div>
  );
};

export default function Hero() {
  const typingTexts = ["I'm a full-stack developer", "I'm a mobile developer", "I'm a marathoner"];
  const [showBackground3D, setShowBackground3D] = useState(false);

  useEffect(() => {
    // Delay loading the 3D background until after critical content is visible
    const timer = setTimeout(() => {
      setShowBackground3D(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {showBackground3D && (
          <Suspense
            fallback={
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>
            }
          >
            <Background3D />
          </Suspense>
        )}
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:leading-18 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Duong Cong Tung
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              (Tung Duong)
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Senior Full Stack Developer
            </h2>
            <div className="relative mb-8">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about crafting digital experiences that seamlessly blend form and
                function. With expertise in full-stack development, advanced AI integration, and
                machine learning implementation, I transform complex challenges into elegant,
                user-centric solutions. My code doesn&apos;t just work—it empowers businesses
                through intelligent systems, predictive analytics, and natural language processing,
                delivering smarter applications that adapt and evolve with users&apos; needs.
              </p>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full lg:block hidden"></div>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/duongtungls"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/tung-duongb65015133"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:duongtungls@gmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button
                onClick={() =>
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
                <ArrowDown className="w-4 h-4" />
              </motion.button>

              <Link href="/print" passHref>
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageStack />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse"></div>
      </motion.div>

      {/* Typing text animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <TypingText texts={typingTexts} />
      </motion.div>
    </section>
  );
}
