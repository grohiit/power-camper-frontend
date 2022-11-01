const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://powercamper.com'

module.exports = {
  siteUrl,
  exclude: ['/test', '/server-sitemap.xml'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test'],
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`, // <==== Add here
    ],
  },
}
