import PageNotFound from '@/components/common/PageNotFound'
import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import Image from 'next/image'

export default function PostsPage({ response, slug }) {
  if (!response?.success || slug.includes('+')) return <PageNotFound />

  const { content, title } = response.data

  return (
    <Layout title={title}>
      <main className="m-auto p-10 w-fit lg:w-2/4 border-2 bg-slate-50">
        <h1 className="text-4xl ">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ params: { slug } }) {
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

// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join('mdfiles'))

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace('.md', ''),
//     },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const markdownWithMeta = fs.readFileSync(
//     path.join('mdfiles', slug + '.md'),
//     'utf-8'
//   )

//   const { data: frontmatter, content } = matter(markdownWithMeta)
//   return {
//     props: {
//       frontmatter,
//       content,
//       slug,
//     },
//   }
// }
