import GallerySummary from '@/components/campground/GallerySummary'
import OverviewReservationForm from '@/components/campground/OverviewReservationForm'
import DetailSections from '@/components/campground/DetailSections'
import CampgroundMap from '@/components/campground/CampgroundMap'
import Direction from '@/components/campground/Directions'
import Weather from '@/components/campground/Weather'
import Faq from '@/components/campground/Faq'
import HeadingContent from '@/components/campground/HeadingContent'
import Reviews from '@/components/campground/Reviews'
import CommentForm from '@/components/campground/CommentForm'
import NearbyCampgrounds from '@/components/campground/NearbyCampgrounds'
import Footer from '@/components/common/Footer'
import BackToTop from '@/components/common/BackToTop'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Aos from 'aos'
import { useEffect } from 'react'

import { API_CAMPGROUND_URL } from '@/config/index'
import PageNotFound from '@/components/common/PageNotFound'
import Layout from '@/components/Layout'

export default function Home({ pagedata, reviewdata, nearbycampgroundData }) {
  useEffect(() => {
    Aos.init()
  }, [])
  if (!pagedata?.success) return <PageNotFound />

  const campgroundpageData = pagedata && pagedata.data ? pagedata.data : {}
  const {
    seoTitle,
    metaDescription,
    datePublished,
    dateModified,
    campgroundMap,
    name,
    directions,
    nearbyCampInfo,
    faqs,
  } = campgroundpageData

  return (
    <>
      <Layout
        title={seoTitle}
        description={metaDescription}
        datePublished={datePublished}
        dateModified={dateModified}
      >
        <GallerySummary data={campgroundpageData} />
        <OverviewReservationForm data={campgroundpageData} />
        {/* <BestCampsitesReservationInfo data={campgroundpageData} />
        <RulesCost data={campgroundpageData} />
        <AmenitiesActivities data={campgroundpageData} /> */}
        <DetailSections campgroundpageData={campgroundpageData} />
        <CampgroundMap campgroundMap={campgroundMap} name={name} />
        <Direction directions={directions} name={name} />
        {/* <Weather data={campgroundpageData} /> */}
        <Faq faqdata={faqs} />
        {/* <Reviews name={name} /> */}
        {/* <CommentForm reviewdata={campgroundreviewData} /> */}
        {/* <NearbyCampgrounds nearbycampgroundData={datanearby} type="Nearby" /> */}
        {nearbyCampInfo && (
          <HeadingContent heading={'Nearby'} content={nearbyCampInfo} />
        )}
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  //   API CALL FOR PAGE DATA
  const PAGE_URL = `${API_CAMPGROUND_URL}/${params.slug}`
  const res = await fetch(PAGE_URL)
  const pagedata = await res.json()

  // API CALL FOR REVIEW DATA
  // const REVIEW_API_URL = `${API_URL}/reviews/${params.slug}`
  // const resrview = await fetch(REVIEW_API_URL)
  // const reviewdata = await resrview.json()

  // API CALL FOR NEARBY CAMPGROUNDS DATA
  // const NEARBYCAMPGROUND_API_URL = `${API_URL}/nearby/${params.slug}`
  // const nearbycampground = await fetch(NEARBYCAMPGROUND_API_URL)
  // const nearbycampgroundData = await nearbycampground.json()

  return {
    props: {
      pagedata,
    },
  }
}
