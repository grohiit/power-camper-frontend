import PageNotFound from '@/components/common/PageNotFound'
import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'

export default function PostsPage({ content, slug }) {
  if (!content?.success || slug.includes('+')) return <PageNotFound />

  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: content.data.content }}
        className="m-auto p-10 w-fit lg:w-2/4 border-2 bg-slate-50"
      ></div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const databaseSlug = `camping+${params.state}+${params.slug}`

  const API_URL = `${API_CONTENT_URL}/${databaseSlug}`

  console.log(API_URL)
  const res = await fetch(API_URL)
  const content = await res.json()

  return {
    props: {
      content,
      slug: params.slug,
    },
  }
}
