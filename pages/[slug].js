import PageNotFound from '@/components/common/PageNotFound'
import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import Image from 'next/image'
import { marked } from 'marked'

export default function PostsPage({ response, slug }) {
  if (!response?.success || slug.includes('+')) return <PageNotFound />

  const { content, title, datePublished, dateModified } = response.data

  return (
    <Layout
      title={title}
      datePublished={datePublished}
      dateModified={dateModified}
    >
      <main className="m-auto p-10 w-fit lg:w-2/4 border-2 bg-slate-50">
        <h1 className="text-4xl ">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </main>
    </Layout>
  )
}

// export async function getServerSideProps({ params: { slug } }) {
//   const API_URL = `${API_CONTENT_URL}/${slug}`

//   const res = await fetch(API_URL)
//   const response = await res.json()

//   return {
//     props: {
//       response,
//       slug,
//     },
//   }
// }

export async function getStaticPaths() {
  const API_URL = `${API_CONTENT_URL}`
  const res = await fetch(API_URL)
  const response = await res.json()

  const paths = response.data
    .filter((v) => !v.slug?.includes('+'))
    .map((article) => ({
      params: {
        slug: article.slug,
      },
    }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const API_URL = `${API_CONTENT_URL}/${slug}`

  const res = await fetch(API_URL)
  const response = await res.json()

  return {
    props: {
      response,
      slug,
    },
  }
}
