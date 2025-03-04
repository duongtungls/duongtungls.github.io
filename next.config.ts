import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Explicitly setting the output to 'export' for static site generation
  output: 'export',

  // Images need to be unoptimized for static export
  images: {
    unoptimized: true,
  },

  // The following ensures that Next.js uses trailing slashes for URLs
  // which can help with GitHub Pages hosting
  trailingSlash: true,

  // Disable sourcemaps in production for smaller build output
  productionBrowserSourceMaps: false,
  
  // This ensures assets are properly referenced when deployed to GitHub Pages
  // No basePath needed for username.github.io repositories
  // If this were a project page (username.github.io/project), you'd need:
  // basePath: '/project',
};

export default nextConfig;
