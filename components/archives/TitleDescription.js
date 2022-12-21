export default function TitleDescription({ title, description }) {
  return (
    <>
      <h1 className="text-left mx-10">{title}</h1>
      {description && <p className="mx-10 max-w-4xl">{description}</p>}
    </>
  )
}
