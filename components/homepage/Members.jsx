import Slider from 'react-slick'
import MemberFeature from './MemberFeature'
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
    <div className="pt-[80px] pb-[122px] members_slider">
      <div className="container px-2  md:container md:px-4 md:mx-auto ">
        <h2 className=" text-[32px] font-Balsamiq md:text-5xl font-bold text-center mb-[70px] leading-[119%]">
          What Do Other Members Think?
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            <MemberFeature />
            <MemberFeature />
            <MemberFeature />
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default Members
