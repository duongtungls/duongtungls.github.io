import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['picsum.photos'],
    // Disable image optimization since GitHub Pages doesn't support it
    unoptimized: true,
  },
};

export default nextConfig;
