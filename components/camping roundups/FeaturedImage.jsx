import Image from 'next/image'

export default function FeaturedImage({ featuredImage, title }) {
  return (
    <>
      <div className="my-2">
        <Image
          alt={title}
          role="presentation"
          src={featuredImage}
          width="1024"
          height="512"
          objectFit="contain"
          priority
        ></Image>
      </div>
    </>
  )
}
