/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/portofolio',
  distDir: 'out',
  assetPrefix: '/portofolio/',
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
    domains: ['github.com', 'raw.githubusercontent.com'],
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
  },
  // Handle static generation
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig; 