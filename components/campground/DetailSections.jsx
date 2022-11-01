import BestCampsites from '@/components/campground/BestCampsites'
import ReservationInfo from '@/components/campground/ReservationInfo'
import CampgroundRules from './CampGroundRules'
import CampgroundCost from './CampGroundCost'
import Image from 'next/image'
import BasicAmenities from './BasicAmenities'
import OtherAmenities from './OtherAmenities'
import Activities from './Activities'

export default function DetailSections({ campgroundpageData }) {
  const { campgroundRules, campgroundCost, name } = campgroundpageData
    ? campgroundpageData
    : {}
  return (
    <>
      <section className="lg:grid grid-cols-2 px-4 gap-10 justify-around">
        <div>
          <BestCampsites data={campgroundpageData} />
          <CampgroundRules campgroundRules={campgroundRules} name={name} />
          {/* lg:w-3/6 lg:pr-[25px] mb-20 lg:mb-0 */}
          <div className="">
            <BasicAmenities
              basicAmenities={campgroundpageData.basicAmenities}
            />
            <OtherAmenities
              otherAmenities={campgroundpageData.otherAmenities}
            />
          </div>
        </div>
        <div>
          <ReservationInfo data={campgroundpageData} />
          <CampgroundCost campgroundCost={campgroundCost} name={name} />
          <Activities activities={campgroundpageData.activities} />
        </div>
      </section>
      {/* <section className="lg:flex content-center container mx-auto relative">
        
        
      </section>
      <section className="my-16 lg:flex content-center container mx-auto relative">
        
        
      </section> */}
    </>
  )
}

{
  /* <div className="absolute top-full left-0 hidden md:inline-block">
          <Image
            className="mb-12"
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664829064/Others/green_left_side_rabwnb.png"
            alt="greenLeftSideDot"
            width={164}
            height={270}
          />
        </div> */
}

{
  /* <div className="absolute top-0 right-0 hidden md:inline-block">
          <Image
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/green_right_side_adf6aj.png"
            alt="greenRightSideDot"
            width={164}
            height={270}
          />
        </div> */
}
