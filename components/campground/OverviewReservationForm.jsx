import Image from 'next/image'
import ReservationForm from './ReservationFormNew'
import { marked } from 'marked'

const OverviewForm = ({ data: { overview, name, facilityID } }) => {
  return (
    <section className="my-16 relative">
      <div className="absolute top-0 right-0 hidden md:inline-block">
        <Image
          className="mb-12"
          src="/img/png/dots/green_right_side.png"
          alt="greenRightSideDot"
          width={164}
          height={270}
        />
      </div>
      <div className="absolute bottom-0 left-0 hidden md:inline-block">
        <Image
          className="mb-12"
          src="/img/png/dots/white_left_side.png"
          alt="whiteLeftSideDot"
          width={164}
          height={270}
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row content-center justify-center lg:justify-between container mx-auto">
        <div className="lg:w-2/4 lg:pr-[25px] mb-6 lg:mb-0 lg:items-start lg:justify-start">
          <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-5 w-full">
            Overview
          </h2>
          <div
            className="font-Cabin text-lg opacity-70 text-justify max-w-lg list-disc mb-12 block"
            dangerouslySetInnerHTML={{
              __html: marked(overview),
            }}
          ></div>
        </div>
        <ReservationForm
          className="lg:w-2/4 mx-11"
          name={name}
          facilityID={facilityID}
        />
      </div>
    </section>
  )
}

export default OverviewForm
