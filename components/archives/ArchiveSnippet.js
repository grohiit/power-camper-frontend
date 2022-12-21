import Image from 'next/image'
import Link from 'next/link'
import { marked } from 'marked'

export default function ArchiveSnippet({ articles }) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  return (
    <div className="flex flex-wrap justify-around mx-10 mt-5">
      {articles.map((v, index) => (
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
  )
}
