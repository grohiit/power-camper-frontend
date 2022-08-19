import React from "react";
import PageNotFound from "../components/common/PageNotFound";
import Head from "next/head";
const NotFound = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <title>404 Not Found</title>
        <meta name="title" content="Power Camper" />
        <meta
          name="description"
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://power-camper.vercel.app/" />
        <meta property="og:title" content="Power Camper" />
        <meta
          property="og:description"
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <meta
          property="og:image"
          content="https://power-camper.vercel.app/seo.webp"
        />
        <meta
          property="twitter:card"
          content="https://power-camper.vercel.app/"
        />
        <meta
          property="twitter:url"
          content="https://power-camper.vercel.app/"
        />
        <meta property="twitter:title" content="Power Camper" />
        <meta
          property="twitter:description"
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <meta
          property="twitter:image"
          content="https://power-camper.vercel.app/seo.webp"
        />
      </Head>
      <PageNotFound />
    </>
  );
};

export default NotFound;
