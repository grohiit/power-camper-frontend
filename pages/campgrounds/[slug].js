import GallerySummary from '../../components/campground/GallerySummary'
import OverviewReservationForm from '../../components/campground/OverviewReservationForm'
import BestCampsitesReservationInfo from '../../components/campground/BestCampsitesReservationInfo'
import RulesCost from '../../components/campground/RulesCost'
import AmenitiesActivities from '../../components/campground/AmenitiesActivities'
import CampgroundMap from '../../components/campground/CampgroundMap'
import Direction from '../../components/campground/Directions'
import Weather from '../../components/campground/Weather'
import Faq from '../../components/common/Faq'
import Reviews from '../../components/campground/Reviews'
import CommentForm from '../../components/campground/CommentForm'
import NearbyCampgrounds from '../../components/campground/NearbyCampgrounds'
import Footer from '../../components/common/Footer'
import BackToTop from '../../components/common/BackToTop'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Aos from 'aos'
import { useEffect } from 'react'

import { API_URL } from '@/config/index'
import PageNotFound from '../../components/common/PageNotFound'
import Layout from '@/components/Layout'

export default function Home({ pagedata, reviewdata, nearbycampgroundData }) {
  useEffect(() => {
    Aos.init()
  }, [])

  const campgroundpageData = pagedata && pagedata.data ? pagedata.data : {}
  const campgroundreviewData =
    reviewdata && reviewdata.data ? reviewdata.data : {}
  const datanearby =
    nearbycampgroundData && nearbycampgroundData.data
      ? nearbycampgroundData.data
      : {}
  if (!pagedata.success) return <PageNotFound />
  const name = campgroundpageData.name
  return (
    <>
      <Layout
        title={campgroundpageData.seoTitle}
        description={campgroundpageData.metaDescription}
      >
        {/* <Header /> */}
        <GallerySummary data={campgroundpageData} />
        <OverviewReservationForm data={campgroundpageData} />
        <BestCampsitesReservationInfo data={campgroundpageData} />
        <RulesCost data={campgroundpageData} />
        <AmenitiesActivities campgroundpageData={campgroundpageData} />
        <CampgroundMap
          campgroundMap={campgroundpageData.campgroundMap}
          name={name}
        />
        <Direction directions={campgroundpageData.directions} />
        <Weather data={campgroundpageData} />
        <Faq faqdata={campgroundpageData.faqs} />
        <Reviews name={name} />
        <CommentForm reviewdata={campgroundreviewData} />
        <NearbyCampgrounds nearbycampgroundData={datanearby} type="Nearby" />
        <Footer />
        <BackToTop />
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  let pagedata
  let reviewdata
  let nearbycampgroundData
  if (params) {
    //   API CALL FOR PAGE DATA
    const PAGE_URL = `${API_URL}/${params.slug}`

    const res = await fetch(PAGE_URL)
    pagedata = await res.json()

    // API CALL FOR REVIEW DATA
    const REVIEW_API_URL = `${API_URL}/reviews/${params.slug}`
    const resrview = await fetch(REVIEW_API_URL)
    reviewdata = await resrview.json()

    // API CALL FOR NEARBY CAMPGROUNDS DATA
    const NEARBYCAMPGROUND_API_URL = `${API_URL}/nearby/${params.slug}`
    const nearbycampground = await fetch(NEARBYCAMPGROUND_API_URL)
    nearbycampgroundData = await nearbycampground.json()
  }
  return {
    props: {
      pagedata,
      reviewdata,
      nearbycampgroundData,
    },
  }
}
