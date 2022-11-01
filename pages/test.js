import DetailSections from '@/components/campground/DetailSections'
import { API_CAMPGROUND_URL } from '@/config/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function TestPage({ pagedata }) {
  const campgroundpageData = pagedata && pagedata.data ? pagedata.data : {}

  return (
    <>
      <DetailSections campgroundpageData={campgroundpageData} />
    </>
  )
}

export async function getServerSideProps({ params }) {
  //   API CALL FOR PAGE DATA
  const slug = 'el-capitan-state-beach'
  const PAGE_URL = `${API_CAMPGROUND_URL}/${slug}`
  const res = await fetch(PAGE_URL)
  const pagedata = await res.json()

  return {
    props: {
      pagedata,
    },
  }
}
