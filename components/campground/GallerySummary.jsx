import React from 'react'
import CampGroundPhotosSlider from './CampGroundPhotosSlider'
import Summary from './Summary'

const GallerySummary = ({ data }) => {
  return (
    <>
      <div className="min-h-screen bg-cover bg-no-repeat flex  flex-col justify-center items-center mt-36  sm:mt-[150px] xl:mt-12 hero_bg">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse xl:flex-row content-center justify-center xl:justify-between">
            <CampGroundPhotosSlider images={data.images} />
            <Summary data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GallerySummary
