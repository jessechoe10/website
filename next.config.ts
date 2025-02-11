import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website' : '',
  // Ensure CSS modules work with static export
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;