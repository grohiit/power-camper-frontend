import React from 'react'
import Image from 'next/image'

const WhatIsPowerCamper = () => {
  return (
    <>
      <div
        className="container mx-auto pt-[55px] pb-[80px] lg:pb-[124px]"
        id="about"
      >
        <div className="lg:columns-2  flex justify-between items-center lg:flex-row flex-col">
          <div className=" ">
            <h2 className="md:text-5xl  text-[31px] text-[#000] font-Balsamiq   font-bold text-center lg:text-start">
              What is PowerCamper?
            </h2>
            <p className="text-[#4F535D] md:pt-[20px] text-sm sm:text-base font-normal md:max-w-lg max-w-[24em] font-Balsamiq text-center lg:text-start    ">
              Powercamper helps you fnd reservations at popular (or sold-out!)
              campgrounds by notifying you the moment there’s new availability
              or a cancellation. Our system then sends you a link directly to
              where you need to make your reservation before it’s gone
            </p>
          </div>
          <div className="lg:mt-[0px] mt-[50px] flex items-center">
            <Image
              className="w-full "
              src="/img/png/powercampercardone.png"
              alt="Logo"
              width={230}
              height={335}
            />
            <div className="ml-3 lg:ml-10">
              <Image
                className="w-full"
                src="/img/png/powercampercardtwo.png"
                alt="Logo"
                width={230}
                height={335}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatIsPowerCamper
