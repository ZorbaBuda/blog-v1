const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/ZorbaBuda/blog-v1/main/images/**',
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)
