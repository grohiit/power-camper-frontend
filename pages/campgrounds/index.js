import { API_URL } from '@/config/index'
import Navbar from '@/components/homepage/Navbar'
import NearByCampgrounds from '@/components/campground/NearbyCampgrounds'

export default function allCampgroundsPage({ URL, datanearby }) {
  return (
    <>
      <Navbar />
      <NearByCampgrounds nearbycampgroundData={datanearby} type="All" />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const allCampgroundsRes = await fetch(API_URL)
  const allCampgroundData = await allCampgroundsRes.json()
  return {
    props: { URL: API_URL, datanearby: allCampgroundData.data },
  }
}
