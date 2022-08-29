import {
  BusIcon,
  CrossIcon,
  DogIcon,
  ElectricIcon,
  ShowerIcon,
  WaterIcon,
  WheelChairIcon,
  SewerIcon,
} from '@/components/common/Icons'
import Image from 'next/image'

const data = {
  name: 'Test Name',
  website: 'Test.com',
  tagLine: 'No tagline',
  phone: 'No phone',
  rating: 3.5,
  summary: {
    hookups: {
      water: true,
      sewer: false,
      electric: false,
    },
    ada: true,
    cost: 40,
    pets: true,
    shower: true,
    RV: true,
  },
  location: {
    type: 'Point',
    coordinates: [-117.312745, 33.087714],
    formattedAddress: '7201 Carlsbad Blvd, Carlsbad, CA 92011-5429, US',
    street: '7201 Carlsbad Blvd',
    city: 'Carlsbad',
    state: 'CA',
    zipcode: '92011-5429',
    country: 'US',
  },
}

export default function TestPage() {
  let { summary } = data
  const summaryFalse = {
    hookups: { water: false, sewer: false, electric: false },
    ada: false,
    cost: 40,
    pets: false,
    shower: false,
    RV: false,
  }
  summary = summaryFalse
  return (
    <>
      <div className="w-full sm:w-[525px] xl:w-[600px] xl:pl-[25px] mb-12 xl:mb-0 sm:mx-auto xl:ml-auto">
        <div className="river_main_box p-3 sm:p-5 w-full ">
          <div className="river_middle_box  p-3 sm:p-5">
            <div className="flex justify-between mt-6  sm:px-5 max-w-md mx-auto">
              {/* RV   */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2 group relative    ${
                  summary.RV ? '' : 'is_unaivable platte_river_camp_icons'
                }  `}
              >
                <span className="relative">
                  <span className="mx-auto flex justify-center hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                    <BusIcon />
                  </span>

                  <span
                    className={`font-Cabin text-sm lg:text-base  text-center  text-white ${
                      summary.RV ? 'opacity-100' : 'opacity-70'
                    } `}
                  >
                    RV/Trailers
                  </span>
                  {summary.RV || (
                    <span className="absolute cross_icon">
                      <CrossIcon />
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className=" flex justify-between mt-6  sm:px-5 max-w-md mx-auto">
              {/* SHOWER  */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2 group relative    ${
                  summary.shower ? '' : 'is_unaivable platte_river_camp_icons'
                }`}
              >
                <span className="relative">
                  <span className="hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                    <ShowerIcon />
                  </span>
                  {summary.shower || (
                    <span className="absolute cross_icon">
                      <CrossIcon />
                    </span>
                  )}
                </span>
              </div>
              {/* PETS  */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2  group relative  ${
                  summary.pets ? '' : 'is_unaivable platte_river_camp_icons'
                }`}
              >
                <span className="relative">
                  <span className="hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                    <DogIcon />
                  </span>
                  {summary.pets || (
                    <span className="absolute cross_icon">
                      <CrossIcon />
                    </span>
                  )}
                </span>
              </div>
              {/* RV TRAILER  */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2 group relative ${
                  summary.ada ? '' : 'is_unaivable platte_river_camp_icons'
                }`}
              >
                <span className="relative">
                  <span className="hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                    <WheelChairIcon />
                  </span>
                  {summary.ada || (
                    <span className="absolute cross_icon">
                      <CrossIcon />
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="w-full sm:w-[525px] xl:w-[600px] xl:pl-[25px] mb-12 xl:mb-0 sm:mx-auto xl:ml-auto">
        <div className="river_main_box p-3 sm:p-5 w-full ">
          <div className="river_middle_box  p-3 sm:p-5">
            <div className="flex justify-between mt-6  sm:px-5 max-w-md mx-auto">
              {/* RV   */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2 group relative    ${
                  summary.RV ? '' : 'is_unaivable platte_river_camp_icons'
                }  `}
              >
                <span className="mx-auto flex justify-center hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                  <BusIcon />
                </span>

                <span
                  className={`font-Cabin text-sm lg:text-base  text-center  text-white ${
                    summary.RV ? 'opacity-100' : 'opacity-70'
                  } `}
                >
                  RV/Trailers
                </span>
                {summary.RV || (
                  <span className="absolute cross_icon">
                    <CrossIcon />
                  </span>
                )}
              </div>
            </div>
            <div className=" flex justify-between mt-6  sm:px-5 max-w-md mx-auto">
              {/* SHOWER  */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2 group relative    ${
                  summary.shower ? '' : 'is_unaivable platte_river_camp_icons'
                }`}
              >
                <span className="hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                  <ShowerIcon />
                </span>
                {summary.shower || (
                  <span className="absolute cross_icon">
                    <CrossIcon />
                  </span>
                )}
              </div>
              {/* PETS  */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2  group relative  ${
                  summary.pets ? '' : 'is_unaivable platte_river_camp_icons'
                }`}
              >
                <span className="hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                  <DogIcon />
                </span>
                {summary.pets || (
                  <span className="absolute cross_icon">
                    <CrossIcon />
                  </span>
                )}
              </div>
              {/* RV TRAILER  */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2 group relative ${
                  summary.ada ? '' : 'is_unaivable platte_river_camp_icons'
                }`}
              >
                <span className="hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                  <WheelChairIcon />
                </span>
                {summary.ada || (
                  <span className="absolute cross_icon">
                    <CrossIcon />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
