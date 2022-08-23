import React from 'react'
import Slider from 'react-slick'
import NearbyCampgroundListItem from './NearbyCampgroundListItem'
import NearByCampgroundSlide from './NearByCampgroundSlide'

const NearbyCampgrounds = ({ nearbycampgroundData, type }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <section className="mt-20 lg:mt-28 xl:mt-36">
        <div className="container mx-auto ">
          <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center mb-5 md:mb-8 lg:mb-10 xl:mb-16 xxl:mb-20  max-w-lg mx-auto">
            {type} Campgrounds
          </h2>
          <div className="block sm:hidden nearby_slider">
            <Slider {...settings}>
              {nearbycampgroundData &&
                nearbycampgroundData.length &&
                nearbycampgroundData.map((obj, index) => (
                  <NearByCampgroundSlide key={index} obj={obj} />
                ))}
            </Slider>
          </div>
          <div className="lg:w-4/5 hidden sm:block mx-auto">
            {nearbycampgroundData &&
              nearbycampgroundData.length &&
              nearbycampgroundData.map((obj, index) => (
                <NearbyCampgroundListItem key={index} obj={obj} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default NearbyCampgrounds
