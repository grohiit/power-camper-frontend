/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // loader: "custom",
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
  async redirects() {
    return [
      {
        source: '/beach-campgrounds/el-capitan-beach-camping/',
        destination: '/campground/el-capitan-state-beach/',
        permanent: true,
      },
      {
        source: '/beach-campgrounds/:slug',
        destination: '/campground/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
