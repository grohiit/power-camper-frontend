import Image from 'next/image'
import ReservationForm from './ReservationForm/ReservationFormNew'
import { formInputData } from '@/components/common/Content'
import HeadingContent from './HeadingContent'

const OverviewForm = ({
  data: { overview, name, facilityID, dateModified },
}) => {
  const showForm = formInputData.filter((v) => v.facilityID == facilityID)
    .length
    ? true
    : false
  return (
    <section className="flex flex-wrap-reverse px-4 justify-around container mx-auto relative my-10">
      <div className="absolute bottom-full left-4 text-sm text-gray-500 ">
        {`Updated ${dateModified.split('T')[0]}`}
      </div>
      <div className="absolute top-0 right-0 hidden md:inline-block -z-50 ">
        <Image
          className=""
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/green_right_side_adf6aj.png"
          alt="greenRightSideDot"
          width={164}
          height={270}
        />
      </div>
      <div className="absolute bottom-0 left-0 hidden md:inline-block ">
        <Image
          className="mb-12"
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/white_left_side_gps3jp.png"
          alt="whiteLeftSideDot"
          width={164}
          height={270}
        />
      </div>
      <div className={` ${showForm ? 'lg:w-2/4' : 'w-full'} pr-5`}>
        <HeadingContent heading={'Overview'} content={overview} />
      </div>
      {showForm && (
        <div className="lg:w-2/4 pl-5">
          <ReservationForm name={name} facilityID={facilityID} />
        </div>
      )}
    </section>
  )
}

export default OverviewForm
