import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { marked } from 'marked'
import ViewBestCampsiteModal from './ViewBestCampsiteModal'

const BestCampsitesFullScreenSlider = ({ obj }) => {
  const [indexVal, setIndexVal] = useState(0)
  const [show, setShow] = useState(false)

  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  const [sliderMain, setSliderMain] = useState()
  const [sliderSmall, setSliderSmall] = useState()
  const sliderMainRef = useRef(null)
  const slidersmallRef = useRef(null)

  useEffect(() => {
    setSliderMain(sliderMainRef.current)
    setSliderSmall(slidersmallRef.current)
  }, [])

  // FOR SHOW THE SPECIFIC IMAGE THAT CLICK BY USER  ON CAROUSEL
  const handleOnClick = (index) => {
    sliderMainRef.current.slickGoTo(index)
    setIndexVal(index)
  }

  // FOR REMOVE SCROLLBAR WHEN MODAL IS OPEN
  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [show])

  return (
    <>
      <div className="my-5">
        {/* SHOW WHEN CLICK ON ANY SLIDER IMAGE  */}
        <ViewBestCampsiteModal
          indexVal={indexVal}
          setShow={setShow}
          show={show}
          sliderMain={sliderMain}
          sliderSmall={sliderSmall}
          sliderMainRef={sliderMainRef}
          slidersmallRef={slidersmallRef}
          images={obj.Images}
          title={obj.Title}
        />
        <h3>{obj.Title}</h3>

        <div
          className="text-justify  font-Cabin text-lg opacity-70 "
          dangerouslySetInnerHTML={{
            __html: marked(obj.Description || ''),
          }}
        ></div>
        <Slider
          className=" "
          asNavFor={nav2}
          ref={slider1}
          arrows={true}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              },
            },
          ]}
        >
          {obj.Images &&
            obj.Images.length &&
            obj.Images.map((imgPath, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleOnClick(index)
                    setShow(true)
                  }}
                >
                  <div className="">
                    <Image
                      className="w-full rounded-2xl"
                      src={imgPath}
                      layout="responsive"
                      width={445}
                      height={250}
                      alt="sliderImgs"
                      objectFit="contain"
                      placeholder="blur"
                      rounded="xl"
                      blurDataURL="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828677/Others/river_ffzk9j.png"
                    />
                  </div>
                </div>
              )
            })}
        </Slider>
        <div
          // style={{ maxWidth: `${obj.Images.length * 100}px` }}
          className={`px-5`}
        >
          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={obj.Images.length > 5 ? 5 : obj.Images.length}
            slidesToScroll={1}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            centerMode={true}
            centerPadding="10px"
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: obj.Images.length > 3 ? 3 : obj.Images.length,
                },
              },
            ]}
          >
            {obj.Images &&
              obj.Images.length &&
              obj.Images.map((imgPath, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleOnClick(index)
                    setShow(true)
                  }}
                >
                  <div className="text-center mx-3">
                    <Image
                      className="mx-auto rounded"
                      src={imgPath}
                      width={200}
                      height={200}
                      alt="sliderImgsSmall"
                      objectFit="contain"
                      rounded="xl"
                      placeholder="blur"
                      blurDataURL="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828677/Others/river_ffzk9j.png"
                    />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default BestCampsitesFullScreenSlider
