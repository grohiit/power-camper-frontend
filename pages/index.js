import Head from "next/head";
import Footercamp from "../components/homepage/Footercamp";
import HomePageHero from "../components/homepage/HomePageHero";
import WhatIsPowerCamper from "../components/homepage/WhatIsPowerCamper";
import PowerCamperMember from "../components/homepage/PowerCamperMember";
import Campsitesfound from "../components/homepage/Campsitesfound";
import AsEasy from "../components/homepage/AsEasy";
import Joincamper from "../components/homepage/Joincamper";
import Signup from "../components/homepage/Signup";
import Members from "../components/homepage/Members";
import BackToTop from "../components/common/BackToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
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
        <title>Power Camper</title>
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

      <HomePageHero />
      <Campsitesfound />
      <WhatIsPowerCamper />
      <AsEasy />
      <PowerCamperMember />
      <Members />
      <Joincamper />
      <Signup />
      <Footercamp />
      <BackToTop />
    </>
  );
}
