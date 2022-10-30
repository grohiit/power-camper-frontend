const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://powercamper.com'

module.exports = {
  siteUrl,
  exclude: ['/test'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/_next', '/test'],
      },
    ],
  },
}
