import React from 'react'
import CampGroundPhotosSlider from './CampGroundPhotosSlider'
import Summary from './Summary'

const GallerySummary = ({ data }) => {
  return (
    <>
      <div className="bg-cover bg-no-repeat flex  flex-col justify-center items-center py-5 hero_bg xl:bg-[url('https://res.cloudinary.com/dqdzorc8z/image/upload/v1664470127/Header-img-bg_l7ren2.png')] bg-[url('https://res.cloudinary.com/dqdzorc8z/image/upload/v1664470127/Header-img-bg-second_gbkvrq.png')]">
        {/* min-h-screen bg-cover bg-no-repeat flex  flex-col justify-center items-center mt-36  sm:mt-[150px] xl:mt-12 hero_bg */}
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
