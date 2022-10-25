export default function TitleAuthor({ title, author, dateModified }) {
  return (
    <>
      <h1 className="text-4xl ">{title}</h1>
      <div className="text-base mx-2 ">
        By {author}
        <div className="text-sm text-gray-500 ">
          Updated {dateModified.split('T')[0] || ''}
        </div>
      </div>
    </>
  )
}
