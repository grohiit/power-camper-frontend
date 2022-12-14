import Head from 'next/head'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import BackToTop from './common/BackToTop'

export default function Layout({
  children,
  title,
  description,
  datePublished,
  dateModified,
}) {
  function addProductJsonLd() {
    return {
      __html: `
    {"@context": "https://schema.org",
    "@type": "Article",
    "headline": "${title || 'Power Camper'}",
    "description": "${
      description || 'Get notifed of campground availabilities instantly!'
    }",
    "datePublished": "${datePublished || ''}",
    "dateModified": "${dateModified || ''}"}
    `,
    }
  }
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          id="structured-data"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
        <meta charSet="utf-8" />
        <meta name="robots" content="noimageindex" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={
            description || 'Get notifed of campground availabilities instantly!'
          }
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <title>{title || 'Power Camper'}</title>

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
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
