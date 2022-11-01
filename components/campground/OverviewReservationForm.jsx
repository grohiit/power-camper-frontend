import Image from 'next/image'
import ReservationForm from './ReservationForm/ReservationFormNew'
import { marked } from 'marked'
import { formInputData } from '@/components/common/Content'
import HeadingContent from './HeadingContent'

const OverviewForm = ({ data: { overview, name, facilityID } }) => {
  const showForm = formInputData.filter((v) => v.facilityID == facilityID)
    .length
    ? true
    : false
  return (
    <section className="my-16 relative">
      <div className="absolute top-0 right-0 hidden md:inline-block">
        <Image
          className="mb-12"
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/green_right_side_adf6aj.png"
          alt="greenRightSideDot"
          width={164}
          height={270}
        />
      </div>
      <div className="absolute bottom-0 left-0 hidden md:inline-block">
        <Image
          className="mb-12"
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/white_left_side_gps3jp.png"
          alt="whiteLeftSideDot"
          width={164}
          height={270}
        />
      </div>
      <div className="flex flex-wrap-reverse lg:flex-row content-center justify-center lg:justify-between container mx-auto ">
        <div className={` ${showForm ? 'lg:w-2/4' : 'w-full'} lg:pr-[25px] `}>
          {/* mb-6 lg:mb-0 lg:items-start lg:justify-start */}
          {/* <h2 className="font-Bubblegum text-2xl lg:text-3xl mb-4">Overview</h2>
          <div
            className="font-Cabin text-lg opacity-70 text-justify list-disc mb-12 block"
            dangerouslySetInnerHTML={{
              __html: marked(overview),
            }}
          ></div> */}
          <HeadingContent heading={'Overview'} content={overview} />
        </div>
        {showForm ? (
          <div className="lg:w-2/4 lg:pr-[25px] w-full">
            <ReservationForm name={name} facilityID={facilityID} />
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}

export default OverviewForm
