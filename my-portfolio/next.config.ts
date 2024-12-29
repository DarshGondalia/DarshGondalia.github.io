// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

// const nextConfig = {
//   output: 'export',
//   assetPrefix: isProd ? 'https://<username>.github.io' : '',
//   // basePath: '/my-portfolio' // Uncomment if you host at <username>.github.io/my-portfolio
// }

// module.exports = nextConfig

// next.config.ts
// const isProd = process.env.NODE_ENV === 'production'

// const nextConfig = {
//   // Use the new experimental `output: 'export'`
//   // so Next.js will output static HTML in 'out' folder
//   output: 'export',

//   // If you're hosting at <username>.github.io (root),
//   // set assetPrefix to '' or to your GitHub pages URL:
//   assetPrefix: isProd ? 'https://DarshGondalia.github.io' : '',

//   // If you host at <username>.github.io/<repo>, uncomment:
//   // basePath: '/my-portfolio',
//   // assetPrefix: isProd ? 'https://<username>.github.io/my-portfolio/' : '',
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export in Next.js 15
  output: 'export',
  
  // If your repo name is <username>.github.io, you typically don’t need basePath.
  // If your repo name is something else, say "my-portfolio",
  // uncomment these lines:
  basePath: '',
  assetPrefix: 'https://darshgondalia.github.io/my-portfolio',
}

module.exports = nextConfig