import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Explicitly setting the output to 'export' for static site generation
  output: 'export',

  // Images need to be unoptimized for static export
  images: {
    unoptimized: true,
  },

  // The following ensures that Next.js uses trailing slashes for URLs
  // which helps create proper index.html files in subdirectories
  trailingSlash: true,

  // Disable sourcemaps in production for smaller build output
  productionBrowserSourceMaps: false,

  basePath: process.env.PAGES_BASE_PATH || '',
};

export default nextConfig;
