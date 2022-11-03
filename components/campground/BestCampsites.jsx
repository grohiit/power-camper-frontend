import { marked } from 'marked'
import BestCampsitesFullScreenSlider from './BestCampsitesFullScreenSlider'

const BestCampsites = ({ data }) => {
  const { bestCampsiteDescription, name, bestCampsites } = data ? data : {}

  return (
    <>
      {/* BEST CAMPSITES  */}

      <h2 className="font-Bubblegum text-2xl lg:text-3xl mb-4 lg:mb-5 max-w-md">
        Best Campsites at {name}
      </h2>

      <div
        className="text-justify font-Cabin text-lg opacity-70"
        dangerouslySetInnerHTML={{
          __html: marked(bestCampsiteDescription),
        }}
      ></div>
      {bestCampsites.length &&
        bestCampsites.map((obj, index) => (
          <BestCampsitesFullScreenSlider obj={obj} key={index} />
        ))}
    </>
  )
}

export default BestCampsites
