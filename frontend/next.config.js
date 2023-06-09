/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.cellphones.com.vn',
      },{
        protocol: 'https',
        hostname: 'img.youtube.com',
      }
    ],
  },
 
}
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
// cssModules: true
// })


module.exports = nextConfig