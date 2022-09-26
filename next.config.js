/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "custom",
    domains: [
      'images.unsplash.com',
      'live.staticflickr.com',
      'commons.wikimedia.org',
      'i.ibb.co',
    ],
    // path: "https://miro.medium.com",
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
}

module.exports = nextConfig
