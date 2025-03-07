import './globals.css';
import { Inter } from 'next/font/google';
import type React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
// import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Duong Cong Tung - Full Stack Developer',
  description:
    'Portfolio of Duong Cong Tung, a Full Stack Developer specializing in modern web applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-4 right-4 z-50">{/* <ModeToggle /> */}</div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
