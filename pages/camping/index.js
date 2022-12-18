import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import { marked } from 'marked'
import Image from 'next/image'
import PageNotFound from '@/components/common/PageNotFound'
import Link from 'next/link'

export default function CampingArchivePage({ response, states }) {
  if (!response.length) return <PageNotFound />

  const domain = process.env.NEXT_PUBLIC_DOMAIN
  const description = `Looking for a place to camp? You’ve come to the right place!
  Below you will find all of our camping guides categorized by state. Whether you have a location in mind or if you are looking for a
  travel spot, you will find it here.`
  const title = `Camping Guides by State`

  return (
    <Layout title={title} description={description}>
      <h1 className="text-left mx-10">{title}</h1>
      <p className="mx-10 max-w-4xl">{description}</p>
      <div className="">
        {states.map((state, index) => (
          <div>
            <hr className="border-2 border-black mx-10 mb-5" />
            <Link href={`${domain}/camping/${state.toLowerCase()}`}>
              <a className="no-underline text-black hover:text-black visited:text-black block">
                <h2 className="text-left ml-10 inline">
                  {state} Camping Guides
                </h2>
                <span className="float-right mx-10 underline text-base lg:text-lg">
                  See all {state} guides
                </span>
              </a>
            </Link>
            <div className="flex flex-wrap justify-around mx-10 mt-5">
              {response
                .filter((v) => v.slug.includes(state.toLowerCase()))
                .filter((v, idx) => idx < 6)
                .map((v, index) => (
                  <Link
                    key={index}
                    href={`${domain}/${v.slug.split('+').join('/')}`}
                  >
                    <a className="no-underline text-black hover:text-black visited:text-black my-3">
                      <div className="w-[500px]">
                        <div>
                          <Image
                            alt={v.title}
                            src={v.featuredImage}
                            width="1024"
                            height="512"
                            objectFit="contain"
                            className="rounded-3xl"
                          ></Image>
                        </div>
                        <h2 className="text-2xl my-0">{v.title}</h2>
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
                    </a>
                  </Link>
                ))}
            </div>

            <div className="text-center underline text-base lg:text-lg my-5">
              <Link href={`${domain}/camping/${state.toLowerCase()}`}>
                <a className="no-underline text-black hover:text-black visited:text-black">
                  See all {state} guides
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const identifier = `camping+`

  const API_URL = `${API_CONTENT_URL}`
  const res = await fetch(API_URL)
  const resp = await res.json()
  const response = resp.data.filter((v) => v.slug.startsWith(identifier))
  const states = [...new Set(response.map((v) => v.slug.split('+')[1]))].map(
    (state) => state.charAt(0).toUpperCase() + state.substr(1).toLowerCase()
  )
  console.log(states)

  return {
    props: {
      response,
      states,
    },
  }
}
