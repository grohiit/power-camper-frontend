import { getServerSideSitemap } from 'next-sitemap'
import { API_CAMPGROUND_URL } from '@/config/index'
import { API_CONTENT_URL } from '@/config/index'

export async function getServerSideProps(ctx) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const campgroundsRes = await fetch(API_CAMPGROUND_URL)
  const campgroundsJson = await campgroundsRes.json()
  const campgroundFields = campgroundsJson.data.map((campground) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}/campground/${campground.slug}/`,
    lastmod: campground.dateModified,
  }))

  const contentRes = await fetch(API_CONTENT_URL)
  const contentJson = await contentRes.json()
  const contentFields = contentJson.data
    .filter((v) => v.slug.includes('+'))
    .map((v) => ({
      loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${v.slug.split('+').join('/')}/`,
      lastmod: v.dateModified,
    }))

  const fields = [...campgroundFields, ...contentFields]
  console.log(fields)
  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}
