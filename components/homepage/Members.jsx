import Image from 'next/image'
import Slider from 'react-slick'
function Members() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: false,
          arrow: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrow: false,
        },
      },
    ],
  }
  return (
    <div className="pt-[80px]   pb-[122px] members_slider">
      <div className="container px-2  md:container md:px-4 md:mx-auto ">
        <h2 className=" text-[32px] font-Balsamiq md:text-5xl font-bold text-center mb-[70px] leading-[119%]">
          What Do Other Members Think?
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            <div className="text-center">
              <Image
                alt="Scott"
                src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828030/Others/sliderlogo_ojscuz.png"
                width={122}
                height={122}
              />
              <h2 className="text-2xl mt-2 font-Balsamiq font-bold">Scott M</h2>
              <p className=" text-base text-[#666666] pt-2 pb-8 font-Balsamiq font-normal">
                PC Member since 2019
              </p>
              <p className=" text-xl md:max-w-md max-w-xs mx-auto text-[#4D4D4D] font-Balsamiq font-normal">
                “[l’ve] been very happy. Like being able to zero in on exactly
                what we are looking for. We have nailed some awesome weekends!”
              </p>
            </div>
            <div className="text-center">
              <Image
                alt="Scott"
                src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828030/Others/sliderlogo_ojscuz.png"
                width={122}
                height={122}
              />
              <h2 className="text-2xl mt-2 font-Balsamiq font-bold">Scott M</h2>
              <p className="font-normal text-base text-[#666666] pt-2 pb-8 font-Balsamiq ">
                PC Member since 2019
              </p>
              <p className="font-normal text-xl md:max-w-md max-w-xs mx-auto text-[#4D4D4D] font-Balsamiq">
                “[l’ve] been very happy. Like being able to zero in on exactly
                what we are looking for. We have nailed some awesome weekends!”
              </p>
            </div>
            <div className="text-center">
              <Image
                alt="Scott"
                src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828030/Others/sliderlogo_ojscuz.png"
                width={122}
                height={122}
              />
              <h2 className="text-2xl mt-2 font-Balsamiq font-bold">Scott M</h2>
              <p className=" text-base text-[#666666] pt-2 pb-8 font-Balsamiq font-normal">
                PC Member since 2019
              </p>
              <p className=" text-xl md:max-w-md max-w-xs mx-auto text-[#4D4D4D] font-Balsamiq font-normal">
                “[l’ve] been very happy. Like being able to zero in on exactly
                what we are looking for. We have nailed some awesome weekends!”
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default Members
