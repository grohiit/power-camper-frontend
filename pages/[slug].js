import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'

export default function PostsPage({ content }) {
  if (!content.success) return <PageNotFound />

  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: content.data.content }}
        className="m-auto p-10 w-fit lg:w-2/4 border-2 bg-slate-50"
      ></div>
    </Layout>
  )
}

export async function getServerSideProps({ params: { slug } }) {
  const API_URL = `${API_CONTENT_URL}/${slug}`

  const res = await fetch(API_URL)
  const content = await res.json()

  return {
    props: {
      content,
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
