import Image from 'next/image'

export default function ({ imageUrl }) {
  return (
    <>
      <div className="my-2">
        <Image
          alt="The Best Backpacks for College and High School Students"
          role="presentation"
          src={imageUrl}
          width="1024"
          height="512"
        ></Image>
      </div>
    </>
  )
}
