import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostsPageComponent from '@/components/common/PostPageComponent'

export default function PostsPage({ frontmatter, content }) {
  return <PostsPageComponent frontmatter={frontmatter} content={content} />
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('mdfiles'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
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

// export async function getServerSideProps({ params: { slug } }) {
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
