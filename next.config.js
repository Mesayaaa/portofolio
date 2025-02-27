/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/portofolio',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Disable server components
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/icons-material', '@mui/material', '@heroicons/react', 'react-icons'],
  }
};

module.exports = nextConfig; 