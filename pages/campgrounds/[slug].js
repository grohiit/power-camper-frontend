import Header from "../../components/common/Header";
import Hero from "../../components/campground/Hero";
import OverviewSlider from "../../components/campground/OverviewSlider";
import RiverCampground from "../../components/campground/RiverCampground";
import Amenities from "../../components/campground/Amenities";
import RiverMap from "../../components/campground/RiverMap";
import Direction from "../../components/campground/Direction";
import Weather from "../../components/campground/Weather";
import Faq from "../../components/common/Faq";
import RiverReview from "../../components/campground/RiverReview";
import CommentForm from "../../components/campground/CommentForm";
import NearbyCampgrounds from "../../components/campground/NearbyCampgrounds";
import Footer from "../../components/common/Footer";
import BackToTop from "../../components/common/BackToTop";
import Navbar from "../../components/homepage/Navbar";
import Head from "next/head";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import { useEffect } from "react";
import ActivityMain from "../../components/campground/ActivityMain";

export default function Home({ pagedata, reviewdata, nearbycampgroundData }) {
  useEffect(() => {
    Aos.init();
  }, []);

  const campgroundpageData = pagedata && pagedata.data ? pagedata.data : {};
  const campgroundreviewData =
    reviewdata && reviewdata.data ? reviewdata.data : {};
  const datanearby =
    nearbycampgroundData && nearbycampgroundData.data
      ? nearbycampgroundData.data
      : {};

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <title>Power Camper</title>
        <meta name="title" content="Power Camper" />
        <meta
          name="description"
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://power-camper2.vercel.app/" />
        <meta property="og:title" content="Power Camper" />
        <meta
          property="og:description"
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <meta
          property="og:image"
          content="https://power-camper2.vercel.app/seo.webp"
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
          content="Platte River Campground Among Top 50 campgrounds in California"
        />
        <meta
          property="twitter:image"
          content="https://power-camper2.vercel.app/seo.webp"
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
      {/* <Header /> */}
      <Hero data={campgroundpageData} />
      <OverviewSlider overview={campgroundpageData.overview} />
      <RiverCampground data={campgroundpageData} />
      <ActivityMain data={campgroundpageData} />
      <Amenities anim={campgroundpageData} />
      <RiverMap campgroundMap={campgroundpageData.campgroundMap} />
      <Direction directions={campgroundpageData.directions} />
      <Weather data={campgroundpageData} />
      <Faq faqdata={campgroundpageData.faqs} />
      <RiverReview />
      <CommentForm reviewdata={campgroundreviewData} />
      <NearbyCampgrounds nearbycampgroundData={datanearby} />
      <Footer />
      <BackToTop />
    </>
  );
}

export async function getServerSideProps({ params }) {
  let pagedata;
  let reviewdata;
  let nearbycampgroundData;
  if (params) {
    //   API CALL FOR PAGE DATA
    const API_URL = `https://campground-data-server-6hsz3.ondigitalocean.app/api/v1/campgrounds/slug/${params.slug}`;
    const res = await fetch(API_URL);
    pagedata = await res.json();

    // API CALL FOR REVIEW DATA
    const REVIEW_API_URL = `https://campground-data-server-6hsz3.ondigitalocean.app/api/v1/campgrounds/reviews/${params.slug}`;
    const resrview = await fetch(REVIEW_API_URL);
    reviewdata = await resrview.json();

    // API CALL FOR NEARBY CAMPGROUNDS DATA
    const NEARBYCAMPGROUND_API_URL = `https://campground-data-server-6hsz3.ondigitalocean.app/api/v1/campgrounds/nearby/${params.slug}`;
    const nearbycampground = await fetch(NEARBYCAMPGROUND_API_URL);
    nearbycampgroundData = await nearbycampground.json();
  }
  return {
    props: {
      pagedata,
      reviewdata,
      nearbycampgroundData,
    },
  };
}
