import {
  CrossIcon,
  HalfStarIcon,
  HookupsIcon,
  NearByDogSecondIcon,
  ShowerSecondIcon,
  StarIcon,
} from '../common/Icons'

const NearByCampgroundSlide = ({ obj }) => {
  const { name, distance, rating, tagLine, summary, slug } = obj
  const { RV, pets, cost, season, showers, totalSites } = summary
  const starImage = [
    { icon: <StarIcon /> },
    { icon: <StarIcon /> },
    { icon: <StarIcon /> },
    { icon: <StarIcon /> },
    { icon: <StarIcon /> },
  ]
  return (
    <>
      <a href={`/campgrounds/${slug}`}>
        <div>
          <div className="  sm:h-auto p-2">
            <div className="flex justify-between flex-wrap items-center ">
              <div className="flex justify-between w-full">
                <div className="mb-6 ">
                  <p className="font-Bubblegum text-sm lg:text-base text-[#3D4F3B]">
                    {name}
                  </p>
                  <p className="font-Cabin text-sm lg:text-base text-black py-1 mb-1">
                    {tagLine}
                  </p>
                  <div className="flex sm:justify-center">
                    {starImage &&
                      starImage.map((value, index) => (
                        <span className="mr-1" key={index}>
                          {rating >= index + 1 ? (
                            <span className={`  star_active`}>
                              {value.icon}
                            </span>
                          ) : rating > index && rating < index + 1 ? (
                            <HalfStarIcon />
                          ) : (
                            <span>{value.icon}</span>
                          )}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="mb-6  sm:mx-4">
                  <h3 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center text-[#3D4F3B]">
                    {distance}
                  </h3>
                  <p className="font-Cabin text-sm lg:text-base text-black">
                    Miles away
                  </p>
                </div>
              </div>

              <div className="mb-6 nearby_campgorunds_bg mx-auto py-3 px-6">
                <div className="flex justify-between mb-2 ">
                  <div className="flex flex-col  justify-center items-center border-2 border-[#3D4F3B]  h-14 w-14 rounded-full ">
                    <span className="font-Cabin text-[10px] text-[#3D4F3B]  ">
                      {totalSites}
                    </span>
                    <span className="font-Cabin text-[10px] opacity-70 text-center  text-[#3D4F3B] ">
                      Total Sites
                    </span>
                  </div>
                  <div className="flex flex-col  justify-center items-center border-2 border-[#3D4F3B]  h-14 w-14 rounded-full mx-4 ">
                    <span className="font-Cabin text-[10px] text-[#3D4F3B]  ">
                      {season}
                    </span>
                    <span className="font-Cabin text-[10px] opacity-70 text-center  text-[#3D4F3B] ">
                      Season
                    </span>
                  </div>
                  <div className="flex flex-col  justify-center items-center border-2 border-[#3D4F3B]  h-14 w-14 rounded-full ">
                    <span className="font-Cabin text-[10px] text-[#3D4F3B]  ">
                      {cost}
                    </span>
                    <span className="font-Cabin text-[10px] opacity-70 text-center  text-[#3D4F3B] px-2">
                      Nightly Cost
                    </span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div
                    className={`h-14 w-14 rounded-full flex flex-col  justify-center items-center border-2 border-[#3D4F3B] ${
                      pets ? '' : 'is_unaivable'
                    }`}
                  >
                    <span className="relative">
                      <span className="svg_icon">
                        <NearByDogSecondIcon />
                      </span>
                      <span className="absolute  cross_icon opacity-0">
                        {pets ? '' : <CrossIcon />}
                      </span>
                    </span>
                  </div>
                  <div
                    className={`h-14 w-14 rounded-full flex flex-col  justify-center items-center border-2 mx-4 border-[#3D4F3B] ${
                      showers ? '' : 'is_unaivable'
                    }`}
                  >
                    <span className="relative">
                      <span className="svg_icon">
                        <ShowerSecondIcon />
                      </span>
                      <span className="absolute  cross_icon opacity-0">
                        {showers ? '' : <CrossIcon />}
                      </span>
                    </span>
                  </div>
                  <div
                    className={`h-14 w-14 rounded-full flex flex-col  justify-center items-center border-2 border-[#3D4F3B]  ${
                      RV ? '' : 'is_unaivable'
                    } `}
                  >
                    <span className="relative">
                      <span className="svg_icon">
                        <HookupsIcon />
                      </span>
                      <span className="absolute  cross_icon opacity-0">
                        {RV ? '' : <CrossIcon />}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default NearByCampgroundSlide
