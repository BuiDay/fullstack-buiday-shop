/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  experimental: {
    scrollRestoration: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.cellphones.com.vn',
      },{
        protocol: 'https',
        hostname: 'img.youtube.com',
      }
      ,{
        protocol: 'https',
        hostname: 'cellphones.com.vn',
      }
    ],
  },
 
}

// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
// cssModules: true
// })

module.exports = nextConfig