/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // loader: "custom",
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    // path: "https://miro.medium.com",
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
  async redirects() {
    return [
      {
        source: '/beach-campgrounds/:slug',
        destination: '/campgrounds/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
