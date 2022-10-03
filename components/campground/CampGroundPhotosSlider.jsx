import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

const CampGroundPhotosSlider = ({ images }) => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  return (
    <>
      <div className="xl:w-3/6 xl:pr-[25px] my-auto pt-10 sm:pt-0">
        <Slider
          className="mainSlider"
          asNavFor={nav2}
          ref={slider1}
          arrows={false}
          autoplay={false}
          autoplaySpeed={4000}
        >
          {images &&
            images.length &&
            images.map((val, index) => {
              return (
                <div key={index}>
                  <div className="slider_img px-2 sm:px-3">
                    <Image
                      className="w-full rounded-2xl"
                      src={val}
                      layout="responsive"
                      width={445}
                      height={315}
                      alt="sliderImgs"
                      objectFit="cover"
                      placeholder="blur"
                      rounded="xl"
                      blurDataURL="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828677/Others/river_ffzk9j.png"
                    />
                  </div>
                </div>
              )
            })}
        </Slider>

        <div className="slider_active_box w-9/12 sm:w-6/12 max-w-md  mx-auto pt-3 lg:pt-5">
          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={images.length > 7 ? 7 : images.length}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            centerMode={true}
            centerPadding="10px"
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: images.length > 5 ? 5 : images.length,
                },
              },
            ]}
          >
            {images &&
              images.length &&
              images.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="mx-3 text-center">
                      <Image
                        className="mx-auto rounded"
                        src={value}
                        width={70}
                        height={70}
                        alt="sliderImgsSmall"
                        objectFit="cover"
                        rounded="xl"
                        placeholder="blur"
                        blurDataURL="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828677/Others/river_ffzk9j.png"
                      />
                    </div>
                  </div>
                )
              })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CampGroundPhotosSlider
