import BestCampsites from '@/components/campground/BestCampsites'
import ReservationInfo from '@/components/campground/ReservationInfo'
import CampgroundRules from './CampGroundRules'
import CampgroundCost from './CampGroundCost'
import Image from 'next/image'
import BasicAmenities from './BasicAmenities'
import OtherAmenities from './OtherAmenities'
import Activities from './Activities'
import HeadingContent from './HeadingContent'

export default function DetailSections({ campgroundpageData }) {
  const {
    campgroundRules,
    campgroundCost,
    name,
    basicAmenities,
    otherAmenities,
    uniqueExperiences,
  } = campgroundpageData ? campgroundpageData : {}
  return (
    <>
      <section className="lg:grid grid-cols-2 px-4 gap-10 justify-around container mx-auto">
        <div>
          <BestCampsites data={campgroundpageData} />

          {uniqueExperiences && (
            <HeadingContent
              heading={'Unique Experiences'}
              content={uniqueExperiences}
            />
          )}
        </div>
        <div>
          <ReservationInfo data={campgroundpageData} />
          <CampgroundCost campgroundCost={campgroundCost} name={name} />
          <Activities activities={campgroundpageData.activities} />
          <div className="">
            <BasicAmenities basicAmenities={basicAmenities} />
            <OtherAmenities otherAmenities={otherAmenities} />
          </div>
          <CampgroundRules campgroundRules={campgroundRules} name={name} />
        </div>
      </section>
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
