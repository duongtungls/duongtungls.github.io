'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import type React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { useState, useEffect } from 'react';
import LoaderComponent from '@/components/LoaderComponent';
// import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion - will be replaced by actual resource loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Duong Cong Tung - Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Duong Cong Tung, a Full Stack Developer specializing in modern web applications."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React, Next.js, Portfolio, Duong Cong Tung"
        />
        <meta name="author" content="Duong Cong Tung" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/hero/tung-photos/portrait-hero.webp" />
        <meta property="og:url" content="https://duongtungls.github.io" />
        <meta property="og:title" content="Duong Cong Tung - Full Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Duong Cong Tung, a Full Stack Developer specializing in modern web applications."
        />
        <meta property="og:site_name" content="Duong Cong Tung Portfolio" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {isLoading && <LoaderComponent />}
          <div className="fixed top-4 right-4 z-50">{/* <ModeToggle /> */}</div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
