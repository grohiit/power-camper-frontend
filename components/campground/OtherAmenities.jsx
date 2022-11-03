import { CrossIcon } from '../common/Icons'
import { iconsObjData } from '../common/Content'

const OtherAmenities = ({ otherAmenities = {} }) => {
  const otherAmenitiesData = otherAmenities.map((v, i) => {
    const ThisIcon = iconsObjData[v.key] || iconsObjData['Placeholder']
    return {
      icon: ThisIcon,
      title: v.key,
      isActive: v.value,
    }
  })

  return (
    <>
      <div className=" max-w-md xl:w-9/12 grid grid-cols-4 gap-2 sm:gap-1 justify-center mx-auto lg:mx-0">
        {otherAmenitiesData.map((val, index) => {
          return (
            <div
              className={`w-[64px] sm:w-[85px] py-2 sm:py-3 border-[#CBDED3] border text-center box_shadow_amemties flex flex-col justify-around items-center sm:mb-5  ${
                val.isActive ? '' : 'is_unaivable'
              }`}
              key={index}
            >
              <span className="relative ">
                <span className="svg_icon amenities_icon">{val.icon}</span>
                <span className="absolute   cross_icon opacity-0">
                  <CrossIcon />
                </span>
              </span>
              <p className="mx-5 my-3 font-Cabin capitalize text-sm font-bold text-[#3D4F3B]">
                {val.title}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OtherAmenities
