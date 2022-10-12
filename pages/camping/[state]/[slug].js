import PageNotFound from '@/components/common/PageNotFound'
import Layout from '@/components/Layout'
import { API_CONTENT_URL } from '@/config/index'
import TitleAuthor from '@/components/camping roundups/TitleAuthor'
import FeaturedImage from '@/components/camping roundups/FeaturedImage'
import AuthorBio from '@/components/camping roundups/AuthorBio'
import MainContent from '@/components/camping roundups/MainContent'

export default function PostsPage({ response, slug }) {
  if (!response?.success || slug.includes('+')) return <PageNotFound />
  const {
    author,
    authorBio,
    authorImage,
    title,
    content,
    updatedDate,
    featuredImage,
  } = response.data

  return (
    <Layout title={title} dateModified={updatedDate}>
      <div className="max-w-5xl m-20 mx-auto">
        <TitleAuthor title={title} author={author} updatedDate={updatedDate} />

        <FeaturedImage featuredImage={featuredImage} title={title} />
        <MainContent content={content} />
        <AuthorBio
          author={author}
          authorBio={authorBio}
          authorImage={authorImage}
        />
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const databaseSlug = `camping+${params.state}+${params.slug}`

  const API_URL = `${API_CONTENT_URL}/${databaseSlug}`

  // console.log(API_URL)
  const res = await fetch(API_URL)
  const response = await res.json()

  return {
    props: {
      response,
      slug: params.slug,
    },
  }
}
