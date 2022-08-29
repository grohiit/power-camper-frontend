import Image from 'next/image'
import React from 'react'
import { markdownToHtml } from '../common/Functions'
import ReservationForm from './ReservationForm'

const OverviewForm = ({ data: { overview, name } }) => {
  return (
    <section className="mt-16 sm:mt-24 pt-1 relative">
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
      <div className="container mx-auto ">
        <div className="xl:flex  content-center justify-center xl:justify-between">
          <div className="xl:w-3/6 xl:pr-[25px] mb-6 xl:mb-0">
            <div className="flex flex-col  xl:items-start xl:justify-start">
              <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-5 w-full">
                Overview
              </h2>
              <div className="max-w-lg list-disc mb-12 block">
                <div
                  className="font-Cabin text-lg opacity-70 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(
                      JSON.parse(JSON.stringify(overview))
                    ),
                  }}
                ></div>
              </div>
            </div>
          </div>
          <ReservationForm name={name} />
        </div>
      </div>
    </section>
  )
}

export default OverviewForm
