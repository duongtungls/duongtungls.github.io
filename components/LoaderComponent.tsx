'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoaderComponent() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Progress animation
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }

        // Gradually slow down progress increments
        const increment = prevProgress < 70 ? 5 : prevProgress < 90 ? 2 : 0.5;
        return Math.min(prevProgress + increment, 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Animation variants for the letter animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        repeatDelay: 1.5,
      },
    }),
  };

  const text = 'Duong Cong Tung - Resume';

  if (isComplete) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-8 flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden">
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="relative w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
        <motion.div
          className="absolute h-full bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
        Loading experience {Math.round(progress)}%
      </p>
    </motion.div>
  );
}
