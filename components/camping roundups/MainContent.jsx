export default function MainContent({ content }) {
  return (
    <main
      className="mx-2"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    ></main>
  )
}
