/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
  });

  const nextConfig = {
    images: {
      remotePatterns: [{
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        // pathname: "/photo-**",
        pathname: "/**",
      },],
    },
  };

  module.exports = withPWA({
    // Your existing Next.js configuration
    nextConfig,
  });

// export default nextConfig;
