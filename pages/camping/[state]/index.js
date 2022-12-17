import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import { marked } from 'marked'
import FeaturedImage from '@/components/camping roundups/FeaturedImage'
import PageNotFound from '@/components/common/PageNotFound'

export default function StateArchivePage({ response, state }) {
  if (!response.length) return <PageNotFound />
  return (
    <Layout>
      <h1 className="text-left mx-10">{state} Camping Guides</h1>
      <p className="mx-10 max-w-4xl">
        Looking for a place to camp in {state}? You’ve come to the right place!
        Below you will find all of our camping guides we have for&nbsp;
        {state}. Whether you have a location in mind or if you are looking for a
        travel spot, you will find it here.
      </p>
      <hr className="my-5 border-2 border-black mx-10" />
      <div className="flex flex-wrap justify-around mx-10">
        {response.map((v, index) => (
          <div className="mx-5 my-5 w-[500px]" key={index}>
            <FeaturedImage featuredImage={v.featuredImage} title={v.title} />
            <h2 className="text-2xl my-0 ">{v.title}</h2>
            <div className="text-base mb-3">
              <div className="text-sm text-blue-500">
                Updated {v.dateModified.split('T')[0] || ''}
              </div>
              by <span className="font-semibold">{v.author}</span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(v.content.substr(0, 200) + '...'),
              }}
            ></div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params: { state } }) {
  const identifier = `camping+${state}`
  const capitalCaseState =
    state.charAt(0).toUpperCase() + state.substr(1).toLowerCase()

  const API_URL = `${API_CONTENT_URL}`
  const res = await fetch(API_URL)
  const resp = await res.json()
  const response = resp.data.filter((v) => v.slug.startsWith(identifier))

  return {
    props: {
      response,
      state: capitalCaseState,
    },
  }
}
