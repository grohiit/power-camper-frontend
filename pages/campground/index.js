import { API_URL } from '@/config/index'
import Layout from '../../components/Layout'
import NearByCampgrounds from '@/components/campground/NearbyCampgrounds'

export default function allCampgroundsPage({ URL, datanearby }) {
  return (
    <>
      <Layout>
        <NearByCampgrounds nearbycampgroundData={datanearby} type="All" />
      </Layout>
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
