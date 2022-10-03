import React from 'react'
import {
  CrossIcon,
  HookupsIcon,
  NearByDogSecondIcon,
  ShowerSecondIcon,
  StarIcon,
} from '../common/Icons'
import ReviewStars from '../common/ReviewStars'
import Link from 'next/link'

const NearbyCampgroundListItem = ({ obj }) => {
  const { name, distance, rating, tagLine, summary, slug } = obj
  const { RV, pets, cost, season, showers, totalSites } = summary
  const stars = [
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
  ]
  return (
    <>
      <Link href={`/campground/${slug}`}>
        <a>
          <div className="flex justify-between  items-center ">
            <div className="mb-6  ">
              <p className="font-Bubblegum text-sm lg:text-base text-[#3D4F3B] max-w-xs">
                {name}
              </p>
              <p className="font-Cabin text-sm lg:text-base text-black py-1">
                {tagLine}
              </p>
              <div className="flex">
                {stars &&
                  stars.map((value, index) => (
                    <ReviewStars
                      key={index}
                      value={value}
                      rating={rating}
                      id={index}
                    />
                  ))}
              </div>
            </div>
            <div className="mb-6   mx-4">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-Bubblegum text-center text-[#3D4F3B]">
                {distance}
              </h3>
              <p className="font-Cabin text-sm lg:text-base text-black text-center">
                Miles away
              </p>
            </div>
            <div className="mb-6  nearby_campgorunds_bg py-3 px-6">
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
                    Season
                  </span>
                  <span className="font-Cabin text-[10px] opacity-70 text-center  text-[#3D4F3B] ">
                    {season}
                  </span>
                </div>
                <div className="flex flex-col  justify-center items-center border-2 border-[#3D4F3B]  h-14 w-14 rounded-full ">
                  <span className="font-Cabin text-[10px] text-[#3D4F3B]  ">
                    Nightly cost
                  </span>
                  <span className="font-Cabin text-[10px] opacity-70 text-center  text-[#3D4F3B]">
                    {cost}
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
                    <span className="absolute  cross_icon-nearby opacity-0">
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
                    <span className="absolute  cross_icon-nearby opacity-0">
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
                    <span className="absolute  cross_icon-nearby opacity-0">
                      {RV ? '' : <CrossIcon />}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default NearbyCampgroundListItem
