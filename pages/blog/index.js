import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogArchivePage({ response }) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  const title = `Power Camper Blog`

  return (
    <Layout title={title}>
      <h1 className="text-left mx-10">{title}</h1>
      <hr className="my-5 border-2 border-black mx-10" />
      <div className="flex flex-wrap justify-around mx-10">
        {response.map((v, index) => (
          <Link key={index} href={`${domain}/${v.slug.split('+').join('/')}`}>
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
