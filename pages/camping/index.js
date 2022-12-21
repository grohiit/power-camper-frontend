import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import PageNotFound from '@/components/common/PageNotFound'
import ArchiveSnippet from '@/components/archives/ArchiveSnippet'
import TitleDescription from '@/components/archives/TitleDescription'
import HorizontalLine from '@/components/archives/HorizontalLine'
import StateSubTitle from '@/components/archives/StateSubTitle'
import SeeAllButton from '@/components/archives/SeeAllButton'

export default function CampingArchivePage({ articles, states }) {
  if (!articles.length) return <PageNotFound />

  const description = `Looking for a place to camp? You’ve come to the right place!
  Below you will find all of our camping guides categorized by state. Whether you have a location in mind or if you are looking for a
  travel spot, you will find it here.`
  const title = `Camping Guides by State`

  return (
    <Layout title={title} description={description}>
      <TitleDescription title={title} description={description} />
      {states.map((state, stateIndex) => (
        <div key={stateIndex}>
          <HorizontalLine />
          <StateSubTitle state={state} />
          <ArchiveSnippet
            articles={articles
              .filter((v) => v.slug.includes(state.toLowerCase()))
              .filter((v, idx) => idx < 6)}
          />
          <SeeAllButton state={state} />
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const identifier = `camping+`

  const API_URL = `${API_CONTENT_URL}`
  const res = await fetch(API_URL)
  const response = await res.json()
  const articles = response.data.filter((v) => v.slug.startsWith(identifier))
  const states = [...new Set(articles.map((v) => v.slug.split('+')[1]))].map(
    (state) => state.charAt(0).toUpperCase() + state.substr(1).toLowerCase()
  )
  console.log(states)

  return {
    props: {
      articles,
      states,
    },
  }
}
