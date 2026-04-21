import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow production builds even if there are TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allow production builds even if there are ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure image domains for external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
