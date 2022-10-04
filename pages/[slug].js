import Layout from '@/components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const { marked } = require('marked')

export default function PostsPage({ frontmatter, content }) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div
        dangerouslySetInnerHTML={{ __html: marked(content) }}
        className="m-auto p-10 w-fit lg:w-2/4 border-2 bg-slate-50"
      ></div>
    </Layout>
  )
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

export async function getServerSideProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('mdfiles', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
