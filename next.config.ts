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

  // Configure webpack to optimize 3D model loading
  webpack: config => {
    // Handle GLB files correctly
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });

    return config;
  },

  // Enable compression for faster load times
  compress: true,

  // Base path setting
  basePath: process.env.PAGES_BASE_PATH || '',

  // Disable unused features in production
  reactStrictMode: true,

  // Remove the experimental CSS optimization that's causing issues
  experimental: {
    optimizeCss: true, // Causing issues with critters
  },
};

export default nextConfig;
