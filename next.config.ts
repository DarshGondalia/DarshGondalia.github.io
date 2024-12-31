/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you want the site at https://darshgondalia.github.io/my-portfolio
  // basePath: '/my-portfolio',
  // assetPrefix: 'https://darshgondalia.github.io/my-portfolio',
  images: {
    unoptimized: true, // Disables Image Optimization
  },
}
module.exports = nextConfig