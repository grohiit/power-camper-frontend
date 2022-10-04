import { marked } from 'marked'
import Layout from '@/components/Layout'

export default function PostPageComponent({ frontmatter, content }) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div
        dangerouslySetInnerHTML={{ __html: marked(content) }}
        className="m-auto p-10 w-fit lg:w-2/4 border-2 bg-slate-50"
      ></div>
    </Layout>
  )
}
