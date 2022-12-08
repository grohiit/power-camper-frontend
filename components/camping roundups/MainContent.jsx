import { marked } from 'marked'

export default function MainContent({ content }) {
  return (
    <main
      className="mx-2"
      dangerouslySetInnerHTML={{
        __html: marked(content),
      }}
    ></main>
  )
}
