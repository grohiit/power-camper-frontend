import { iconsObjData } from '../common/Content'
import { CrossIcon } from '../common/Icons'

const BasicAmenities = ({ basicAmenities = {} }) => {
  const basicAmenitiesData = basicAmenities.map((v, i) => ({
    icon: iconsObjData[v.key] || iconsObjData['Placeholder'],
    title: v.key,
    isActive: v.value,
  }))

  return (
    <>
      <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4 text-center lg:text-start">
        Amenities
      </h2>
      <div className="max-w-md   xl:w-9/12 grid grid-cols-3 gap-4 sm:gap-1 justify-center mb-4 sm:mb-0 mx-auto lg:mx-0 ">
        {basicAmenitiesData.map((val, index) => (
          <div
            className={`w-24 sm:w-[128px]  py-4 sm:py-5 border-[#CBDED3] border text-center box_shadow_amemties flex flex-col justify-around items-center   sm:mb-5  ${
              val.isActive ? '' : 'is_unaivable'
            }`}
            key={index}
          >
            <span className="relative ">
              <span className="svg_icon amenities_icon">{val.icon}</span>
              <span className="absolute  cross_icon opacity-0">
                <CrossIcon />
              </span>
            </span>
            <p className="mx-5 my-3 font-Cabin capitalize text-sm font-bold text-[#3D4F3B]">
              {val.title}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default BasicAmenities
