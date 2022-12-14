import { heroData } from '@/components/common/Content'
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
import ReviewStars from '@/components/common/ReviewStars'

const Summary = ({ data }) => {
  const { star } = heroData

  const { name, website, tagLine, phone, rating, summary, location, address } =
    data ? data : {}

  return (
    <>
      <div className="w-full sm:w-[525px] xl:w-[600px] xl:pl-[25px] mb-12 xl:mb-0 sm:mx-auto xl:ml-auto">
        <div className="river_main_box p-3 sm:p-5 w-full">
          <div className="river_middle_box  p-3 sm:p-5">
            <h1 className="font-Bubblegum text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white text-center mb-4 capitalize">
              {name}
            </h1>
            <p className="font-Cabin text-sm lg:text-base opacity-70 text-center  text-white">
              {tagLine}
            </p>
            <div className="flex justify-center mx-auto my-3">
              {star.map((value, index) => (
                <ReviewStars
                  key={index}
                  value={value}
                  rating={rating}
                  id={index}
                />
              ))}
            </div>
            <p className="font-Cabin text-sm lg:text-base opacity-70 text-center  text-white px-10 sm:px-0">
              {address ? address : ''}
            </p>
            <div className="text-center">
              <a
                href={`tel:${phone}`}
                className="font-Cabin text-sm lg:text-base opacity-70 text-center  text-white"
              >
                Contact: {phone}
              </a>
            </div>
            <div className="text-center">
              <a
                href={`${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-Cabin text-sm lg:text-base opacity-70 text-center underline text-white hover:text-blue-800"
              >
                {website}
              </a>
            </div>

            <div className="flex justify-between mt-6  sm:px-5 max-w-md mx-auto ">
              {/* TOTAL SITES  */}
              <div className="flex flex-col  justify-center items-center border-2 border-white  h-20 sm:h-24  w-20 sm:w-24 rounded-full  ">
                <span className="font-Cabin text-sm lg:text-base text-white  ">
                  {`$${summary.cost}`}
                </span>
                <span
                  className={`font-Cabin text-sm lg:text-base  text-center  text-white ${
                    summary.cost ? 'opacity-100' : 'opacity-70'
                  } `}
                >
                  per night
                </span>
              </div>
              {/* RV   */}
              <div
                className={`border-white h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center border-2 group relative    ${
                  summary.RV ? '' : 'is_unaivable platte_river_camp_icons'
                }`}
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
                  <span className="absolute cross_icon opacity-0">
                    <CrossIcon />
                  </span>
                )}
                <span className="pointer-events-none absolute -top-14 sm:-top-10 left-1/2 -translate-x-1/2 max-w-xs w-[120px] sm:w-[250px] z-50 text-center rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100 font-Cabin text-sm lg:text-base">
                  {summary.RV
                    ? 'This campground allows RVs or Trailers at some campsites'
                    : 'This campground does NOT allow RVs or Trailers'}
                </span>
              </div>
              {/* NIGTLY COST  */}
              <div className="  h-20 sm:h-24  w-20 sm:w-24 rounded-full flex flex-col  justify-center items-center  ">
                <div
                  className={`  h-[40px] w-[40px]  group relative    ${
                    summary.hookups.electric
                      ? ''
                      : 'is_unaivable platte_river_camp_icons'
                  }`}
                >
                  <span className="mx-auto flex justify-center hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                    <ElectricIcon />
                  </span>

                  {summary.hookups.electric || (
                    <span className="absolute cross_icon opacity-0 hookups_icon z-40">
                      <CrossIcon />
                    </span>
                  )}
                  <span className="pointer-events-none absolute -top-14 sm:-top-10 left-1/2 -translate-x-1/2 max-w-xs w-[120px] sm:w-[250px] z-50 text-center rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100 font-Cabin text-sm lg:text-base">
                    {summary.hookups.electric
                      ? 'This campground has Electric hookups'
                      : 'This campground has NO Electric hookups'}
                  </span>
                </div>
                <div className="flex    justify-center items-center mt-[-5px] ">
                  <div
                    className={`  h-[40px] w-[40px]  group relative    ${
                      summary.hookups.sewer
                        ? ''
                        : 'is_unaivable platte_river_camp_icons'
                    }`}
                  >
                    <span className="mx-auto flex justify-center hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                      <SewerIcon />
                    </span>

                    {summary.hookups.sewer || (
                      <span className="absolute cross_icon opacity-0 hookups_icon z-40">
                        <CrossIcon />
                      </span>
                    )}
                    <span className="pointer-events-none absolute -top-14 sm:-top-10 left-1/2 -translate-x-1/2 max-w-xs w-[120px] sm:w-[250px] z-50 text-center rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100 font-Cabin text-sm lg:text-base">
                      {summary.hookups.sewer
                        ? 'This campground has sewer hookups'
                        : 'This campground has NO sewer hookups'}
                    </span>
                  </div>

                  <div
                    className={`  h-[40px] w-[40px]  group relative    ${
                      summary.hookups.water
                        ? ''
                        : 'is_unaivable platte_river_camp_icons'
                    }`}
                  >
                    <span className="mx-auto flex justify-center hero_svg_icon text-white rv_trailers text-sm lg:text-base">
                      <WaterIcon />
                    </span>

                    {summary.hookups.water || (
                      <span className="absolute cross_icon opacity-0 hookups_icon z-40">
                        <CrossIcon />
                      </span>
                    )}
                    <span className="pointer-events-none absolute -top-14 sm:-top-10 -left-4 sm:left-1/2 -translate-x-1/2 max-w-xs w-[120px] sm:w-[250px] z-50 text-center rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100 font-Cabin text-sm lg:text-base">
                      {summary.hookups.water
                        ? 'This campground has water hookups'
                        : 'This campground has NO water hookups'}
                    </span>
                  </div>
                </div>
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
                  <span className="absolute cross_icon opacity-0">
                    <CrossIcon />
                  </span>
                )}
                <span className="pointer-events-none absolute -top-14 sm:-top-10 left-1/2 -translate-x-1/2 max-w-xs w-[120px] sm:w-[250px] z-50 text-center rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100 font-Cabin text-sm lg:text-base">
                  {summary.shower
                    ? 'This campground has showers on site'
                    : 'This campground has NO showers on site'}
                </span>
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
                  <span className="absolute cross_icon opacity-0">
                    <CrossIcon />
                  </span>
                )}
                <span className="pointer-events-none absolute -top-14 sm:-top-10 left-1/2 -translate-x-1/2 max-w-xs w-[120px] sm:w-[250px] z-50 text-center rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100 font-Cabin text-sm lg:text-base">
                  {summary.pets
                    ? 'This campground is pet-friendly. Bring your pals!'
                    : 'This campground does NOT allow pets'}
                </span>
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
                  <span className="absolute cross_icon opacity-0">
                    <CrossIcon />
                  </span>
                )}
                <span className="pointer-events-none absolute -top-14 sm:-top-10 left-1/2 -translate-x-1/2 max-w-xs w-[120px] sm:w-[250px] z-50 text-center rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100 font-Cabin text-sm lg:text-base">
                  {summary.ada
                    ? 'This campground has accessibility campsites and features'
                    : 'This campground does NOT have accessibility campsites and features'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary
