import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import ArchiveSnippet from '@/components/archives/ArchiveSnippet'
import TitleDescription from '@/components/archives/TitleDescription'
import HorizontalLine from '@/components/archives/HorizontalLine'

export default function BlogArchivePage({ articles }) {
  const title = `Power Camper Blog`

  return (
    <Layout title={title}>
      <TitleDescription title={title} />
      <HorizontalLine />
      <ArchiveSnippet articles={articles} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const identifier = `blog+`

  const API_URL = `${API_CONTENT_URL}`

  // console.log(API_URL)
  const res = await fetch(API_URL)
  const response = await res.json()
  const articles = response.data.filter((v) => v.slug.startsWith(identifier))

  return {
    props: {
      articles,
    },
  }
}
