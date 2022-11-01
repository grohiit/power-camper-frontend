import { marked } from 'marked'
export default function UniqueExperiences({ heading, content }) {
  return (
    <>
      <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4">
        {heading}
      </h2>

      <div
        className="text-justify  font-Cabin text-lg opacity-70"
        dangerouslySetInnerHTML={{
          __html: marked(content),
        }}
      ></div>
    </>
  )
}
