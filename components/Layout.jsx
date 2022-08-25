import Head from 'next/head'
import Navbar from './homepage/Navbar'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Get notifed of campground availabilities instantly!"
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <title>{title || 'Power Camper'}</title>
        <meta name="title" content="Power Camper" />
        <meta
          name="description"
          content="Get notifed of campground availabilities instantly!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://power-camper2.vercel.app/" />
        <meta property="og:title" content="Power Camper" />
        <meta
          property="og:description"
          content="Get notifed of campground availabilities instantly!"
        />
        <meta
          property="og:image"
          content="https://power-camper2.vercel.app/seoSecond.webp"
        />
        <meta
          property="twitter:card"
          content="https://power-camper2.vercel.app/"
        />
        <meta
          property="twitter:url"
          content="https://power-camper2.vercel.app/"
        />
        <meta property="twitter:title" content="Power Camper" />
        <meta
          property="twitter:description"
          content="Get notifed of campground availabilities instantly!"
        />
        <meta
          property="twitter:image"
          content="https://power-camper2.vercel.app/seoSecond.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}