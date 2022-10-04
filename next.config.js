/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // loader: "custom",
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'cdn.thewirecutter.com',
    ],
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
        source: '/beach-campgrounds/san-elijo-beach-camping/',
        destination: '/campground/san-elijo-state-beach/',
        permanent: true,
      },
      {
        source: '/beach-campgrounds/carpinteria-state-beach-camping/',
        destination: '/campground/carpinteria-state-beach/',
        permanent: true,
      },
      {
        source: '/beach-campgrounds/leo-carrillo-beach-camping',
        destination: '/campground/leo-carillo-state-beach/',
        permanent: true,
      },
      {
        source: '/beach-campgrounds/san-clemente-state-beach-camping/',
        destination: '/campground/san-clemente-state-beach',
        permanent: true,
      },
      {
        source: '/beach-campgrounds/bolsa-chica-beach-camping/',
        destination: '/campground/bolsa-chica-state-beach/',
        permanent: true,
      },
      {
        source: '/beach-campgrounds/half-moon-bay-camp/',
        destination: '/campground/francis-beach/',
        permanent: true,
      },
      {
        source: '/beach-campgrounds/',
        destination: '/campground/',
        permanent: true,
      },
      {
        source: '/faq/scan-setup',
        destination: '/how-to-set-up-a-scan/',
        permanent: true,
      },
      {
        source: '/login/',
        destination: 'https://app.powercamper.com/login/',
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
