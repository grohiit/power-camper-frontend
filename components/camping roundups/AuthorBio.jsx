import Image from 'next/image'
export default function AuthorBio({ author, authorBio, authorImage }) {
  return (
    <>
      <div className="border-t-2 border-black mx-2 mt-10">
        <h2 className="mt-2 ">About the Author</h2>
        <div className="flex items-center space-x-3 mb-2">
          <Image
            loading="lazy"
            alt={author}
            src={authorImage}
            width="150"
            height="150"
            className="rounded-full"
            objectFit="contain"
          />
          <div className="font-bold">
            <p>{author}</p>
          </div>
        </div>
        <div>
          <p>{authorBio}</p>
        </div>
      </div>
    </>
  )
}
