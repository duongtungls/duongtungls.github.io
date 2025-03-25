import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duong Cong Tung - Full Stack Developer',
  description:
    'Portfolio of Duong Cong Tung, a Full Stack Developer specializing in modern web applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Portfolio', 'Duong Cong Tung'],
  authors: [{ name: 'Duong Cong Tung', url: 'https://duongtungls.github.io' }],
  creator: 'Duong Cong Tung',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://duongtungls.github.io',
    title: 'Duong Cong Tung - Full Stack Developer',
    description: 'Full Stack Developer specializing in JavaScript ecosystems with AI expertise',
    siteName: 'Duong Cong Tung Portfolio',
    images: [
      {
        url: '/hero/tung-photos/portrait-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Duong Cong Tung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duong Cong Tung - Full Stack Developer',
    description: 'Full Stack Developer specializing in JavaScript ecosystems with AI expertise',
    images: ['/hero/tung-photos/portrait-hero.webp'],
  },
};
