import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import { marked } from 'marked'
import FeaturedImage from '@/components/camping roundups/FeaturedImage'

export default function BlogArchivePage({ response }) {
  return (
    <Layout>
      <h1>Power Camper Blog</h1>
      <hr className="my-5" />
      {response.map((v, index) => (
        // v.title,
        // v.author,
        // v.dateModified,
        // marked(v.content.substr(0, 30)),
        // v.featuredImage,

        <div className="w-2/6 mx-5 my-5 h-auto" key={index}>
          <FeaturedImage featuredImage={v.featuredImage} title={v.title} />
          <h2 className="text-2xl my-0 ">{v.title}</h2>
          <div className="text-base">
            <div className="text-sm text-blue-500">
              Updated {v.dateModified.split('T')[0] || ''}
            </div>
            by {v.author}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: marked(v.content.substr(0, 200)),
            }}
          ></div>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const identifier = `blog+`

  const API_URL = `${API_CONTENT_URL}`

  // console.log(API_URL)
  const res = await fetch(API_URL)
  const resp = await res.json()
  const response = resp.data.filter((v) => v.slug.startsWith(identifier))

  return {
    props: {
      response,
    },
  }
}
