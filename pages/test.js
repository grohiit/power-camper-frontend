import DetailSections from '@/components/campground/DetailSections'
import { API_CAMPGROUND_URL } from '@/config/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function TestPage({ pagedata }) {
  const campgroundpageData = pagedata && pagedata.data ? pagedata.data : {}

  return (
    <>
      <DetailSections campgroundpageData={campgroundpageData} />

      {/* <div className="lg:grid grid-cols-2">
        <div className="order-1">
          <div className="bg-red-200 p-10 h-60">One</div>

          <div className="bg-blue-200 p-10 h-20">Three</div>
          <div className="bg-purple-400 p-10 h-80">Five</div>
          <div className="bg-orange-400 p-10 h-20">Seven</div>
        </div>
        <div className="order-2">
          <div className="bg-yellow-200 p-10 h-80">Two</div>
          <div className="bg-green-200 p-10 h-32">Four</div>

          <div className="bg-gray-400 p-10 h-80">Six</div>
        </div>
      </div>
      <div className="border-2 border-black"></div>
      <div className="lg:flex flex-wrap">
        <div className="bg-red-200 p-10 h-60 basis-2/4 shrink-0">One</div>
        <div className="bg-yellow-200 p-10 h-80 basis-2/4 shrink-0">Two</div>
        <div className="bg-blue-200 p-10 h-20 basis-2/4 shrink-0">Three</div>
        <div className="bg-green-200 p-10 h-32 basis-2/4 shrink-0">Four</div>
        <div className="bg-purple-400 p-10 h-80 basis-2/4 shrink-0">Five</div>
        <div className="bg-gray-400 p-10 h-80 basis-2/4 shrink-0">Six</div>
        <div className="bg-orange-400 p-10 h-20 basis-2/4 shrink-0">Seven</div>
      </div> */}
    </>
  )
}

export async function getServerSideProps({ params }) {
  //   API CALL FOR PAGE DATA
  const slug = 'san-clemente-state-beach'
  const PAGE_URL = `${API_CAMPGROUND_URL}/${slug}`
  const res = await fetch(PAGE_URL)
  const pagedata = await res.json()

  return {
    props: {
      pagedata,
    },
  }
}
