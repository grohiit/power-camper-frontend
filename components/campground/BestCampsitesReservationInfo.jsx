import React from 'react'
import { RedCrossIcon, TickIcon } from '../common/Icons'
import Image from 'next/image'
import { markdownToHtml } from '../common/Functions'

const BestCampsitesReservationInfo = ({ data }) => {
  const {
    reservationAllowed,
    reservationRequired,
    reservationInfo,
    bestCampgsiteDescription,
    name,
  } = data ? data : {}
  const bestCampsiteImage = data.bestCampsiteImage || data.images[0]
  return (
    <>
      <section className=" mt-20 lg:mt-28 xl:mt-36" id="About">
        <div className="container mx-auto">
          <div className="lg:flex  content-center">
            <div className="lg:w-3/6 lg:pr-[25px] mb-20 lg:mb-0">
              <div>
                <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-5 max-w-md">
                  Best Campsites at {name}
                </h2>

                <div
                  className="text-justify  font-Cabin text-sm lg:text-base opacity-70 mb-6"
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(bestCampgsiteDescription),
                  }}
                ></div>

                <Image
                  className="w-full"
                  src={bestCampsiteImage}
                  alt="RiverImgS"
                  layout="responsive"
                  width={445}
                  height={315}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="lg:w-3/6 lg:pl-[25px]">
              <div>
                <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-5 max-w-md">
                  {name} Reservation Information
                </h2>
                <div className="river_main_box w-oka py-[6px] px-[8px] mb-[20px] lg:mb-[30px]">
                  <div className="river_middle_box py-4 lg:py-6 px-3 lg:px-[16px]">
                    <div className="river_small_box py-[10px] px-[10px] lg:px-6 flex justify-between mb-2">
                      <h4 className="font-Cabin mb-0 text-sm lg:text-base   font-bold text-white w-3/6">
                        Reservations Allowed?
                      </h4>
                      <span className="w-3/6">
                        {reservationAllowed ? <TickIcon /> : <RedCrossIcon />}
                      </span>
                    </div>
                    <div className="river_small_box py-[10px] px-[10px] lg:px-6 flex justify-between">
                      <h4 className="font-Cabin mb-0 text-sm lg:text-base    font-bold text-white w-3/6">
                        Reservations Required?
                      </h4>
                      <span className="font-Cabin text-sm lg:text-base    text-white w-3/6">
                        {reservationRequired}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="text-justify  font-Cabin text-sm lg:text-base opacity-70"
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(reservationInfo),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BestCampsitesReservationInfo
