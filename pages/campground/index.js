import { API_CAMPGROUND_URL } from '@/config/index'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { marked } from 'marked'

export default function allCampgroundsPage({ campgroundData }) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  return (
    <>
      <Layout>
        <div className="flex flex-wrap justify-around mx-10 mt-5">
          {campgroundData.map((v, index) => (
            <Link
              key={index}
              href={`/campground/${v.slug.split('+').join('/')}`}
            >
              <a className="no-underline text-black hover:text-black visited:text-black my-3">
                <div className="w-[500px]">
                  <div>
                    <Image
                      alt={v.name}
                      src={v.images[0]}
                      width="1024"
                      height="512"
                      objectFit="stretch"
                      className="rounded-3xl"
                    ></Image>
                  </div>
                  <h2 className="text-2xl mb-3 mt-0">{v.name}</h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(v.overview.substr(0, 200) + '...'),
                    }}
                  ></div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(API_CAMPGROUND_URL)
  const campgroundData = await response.json()

  return {
    props: { campgroundData: campgroundData.data },
  }
}
