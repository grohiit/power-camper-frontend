/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "custom",
    domains: [
      'images.unsplash.com',
      'live.staticflickr.com',
      'commons.wikimedia.org',
    ],
    // path: "https://miro.medium.com",
  },
}

module.exports = nextConfig
