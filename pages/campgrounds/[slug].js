import Hero from '../../components/campground/Hero'
import OverviewSlider from '../../components/campground/OverviewSlider'
import RiverCampground from '../../components/campground/RiverCampground'
import Amenities from '../../components/campground/Amenities'
import RiverMap from '../../components/campground/RiverMap'
import Direction from '../../components/campground/Direction'
import Weather from '../../components/campground/Weather'
import Faq from '../../components/common/Faq'
import RiverReview from '../../components/campground/RiverReview'
import CommentForm from '../../components/campground/CommentForm'
import NearbyCampgrounds from '../../components/campground/NearbyCampgrounds'
import Footer from '../../components/common/Footer'
import BackToTop from '../../components/common/BackToTop'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Aos from 'aos'
import { useEffect } from 'react'
import ActivityMain from '../../components/campground/ActivityMain'
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

  return (
    <>
      <Layout>
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
