import AuthorBio from '@/components/camping roundups/AuthorBio'
import FeaturedImage from '@/components/camping roundups/FeaturedImage'
import MainContent from '@/components/camping roundups/MainContent'
import TitleAuthor from '@/components/camping roundups/TitleAuthor'
import Image from 'next/image'

export default function TestPage() {
  const authorBio = `Zoe Vanderweide is a staff writer reporting on style and accessories
  at Wirecutter. She has been wearing things for over three decades,
  and she has spent years covering streetwear, luxury, art, and
  design. Off the clock, you can find her painting the town rainbow
  with her (devastatingly stylish) daughter.`
  const content = `<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
  aspernatur quos eveniet veniam doloremque reprehenderit sequi nihil
  natus! Dolorum laboriosam, sunt placeat iste sint, illum recusandae
  modi veritatis voluptas error atque aperiam quos fugiat doloribus et
  id totam minus cupiditate maiores adipisci quas expedita suscipit!
  Ipsum neque libero incidunt earum distinctio labore asperiores
  minus. Quo, odit saepe. Maiores consequatur maxime repellat aliquid
  repellendus molestiae nostrum aspernatur voluptate non adipisci
  atque itaque, ipsam odit reprehenderit minus! Nesciunt architecto
  ratione quis nihil illum reprehenderit error, saepe nam porro
  explicabo dignissimos corporis natus temporibus, veniam optio nobis
  eius! Voluptatum possimus incidunt accusamus sed?
</p>`
  return (
    <>
      <div className="max-w-5xl m-20 mx-auto">
        <TitleAuthor
          title="The Best Backpacks for College and High School Students"
          author="Zoe Vanderweide"
          updatedDate="September 12, 2022"
        />

        <FeaturedImage imageUrl="https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-2x1-0006.jpg" />
        <MainContent content={content} />
        <AuthorBio
          author="Zoe Vanderweide"
          authorBio={authorBio}
          authorImage="https://cdn.thewirecutter.com/wp-content/media/2022/06/zoe-vanderweide.jpg"
        />
      </div>
    </>
  )
}
