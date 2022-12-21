import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import PageNotFound from '@/components/common/PageNotFound'
import ArchiveSnippet from '@/components/archives/ArchiveSnippet'
import TitleDescription from '@/components/archives/TitleDescription'
import HorizontalLine from '@/components/archives/HorizontalLine'

export default function StateArchivePage({ articles, state }) {
  if (!articles.length) return <PageNotFound />

  const description = `Looking for a place to camp in ${state}? You’ve come to the right place!
  Below you will find all of our camping guides we have for ${state}. Whether you have a location in mind or if you are looking for a
  travel spot, you will find it here.`
  const title = `${state} Camping Guides`

  return (
    <Layout title={title} description={description}>
      <TitleDescription title={title} description={description} />
      <HorizontalLine />
      <ArchiveSnippet articles={articles} />
    </Layout>
  )
}

export async function getServerSideProps({ params: { state } }) {
  const identifier = `camping+${state}`
  const capitalCaseState =
    state.charAt(0).toUpperCase() + state.substr(1).toLowerCase()

  const API_URL = `${API_CONTENT_URL}`
  const res = await fetch(API_URL)
  const response = await res.json()
  const articles = response.data.filter((v) => v.slug.startsWith(identifier))

  return {
    props: {
      articles,
      state: capitalCaseState,
    },
  }
}
