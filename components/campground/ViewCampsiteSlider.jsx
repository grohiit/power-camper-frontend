import Slider from 'react-slick'
import Image from 'next/image'

const ViewCampsiteSlider = ({
  setShow,
  sliderMain,
  sliderSmall,
  sliderMainRef,
  slidersmallRef,
  images,
}) => {
  return (
    <>
      <Slider
        className="mainSlider"
        asNavFor={sliderSmall}
        ref={sliderMainRef}
        arrows={true}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
        ]}
      >
        {images &&
          images.length &&
          images.map((imgPath, index) => {
            return (
              <div key={index} onClick={() => setShow(true)}>
                <div className="slider_img pr-2 sm:pr-3">
                  <Image
                    className="w-full rounded-2xl"
                    src={imgPath}
                    layout="responsive"
                    width={445}
                    height={315}
                    alt="sliderImgs"
                    objectFit="contain"
                    placeholder="blur"
                    rounded="xl"
                    blurDataURL="/img/png/river/river.png"
                  />
                </div>
              </div>
            )
          })}
      </Slider>
      <div
        style={{ maxWidth: `${images.length * 100}px` }}
        className="slider_active_box2   mx-auto pt-3 lg:pt-5"
      >
        <Slider
          asNavFor={sliderMain}
          ref={slidersmallRef}
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
            images.map((imgPath, index) => {
              return (
                <div key={index} onClick={() => setShow(true)}>
                  <div className="mx-3 text-center">
                    <Image
                      className="mx-auto rounded"
                      src={imgPath}
                      width={100}
                      height={100}
                      alt="sliderImgsSmall"
                      objectFit="contain"
                      rounded="xl"
                      placeholder="blur"
                      blurDataURL="/img/png/river/river.png"
                    />
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    </>
  )
}

export default ViewCampsiteSlider
