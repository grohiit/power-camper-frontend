export default function TitleAuthor({ title, author, updatedDate }) {
  return (
    <>
      <h1 className="text-4xl ">{title}</h1>
      <div className="text-base mx-2 ">
        By {author}
        <div className="text-sm text-gray-500 ">Updated {updatedDate}</div>
      </div>
    </>
  )
}
