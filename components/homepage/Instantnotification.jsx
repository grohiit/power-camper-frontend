import React from 'react'
import Image from 'next/image'
const Instantnotification = () => {
  return (
    <>
      <div className="md:columns-2 mb:20 md:mb-[50px] flex md:justify-between items-center md:flex-row flex-col justify-center">
        <div className=" flex items-center mb-[25px] md:mb-0 ">
          <Image
            className="w-full "
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664827928/Others/Instantnotifcations_ghkamd.png"
            alt="Logo"
            width={367}
            height={269}
          />
        </div>
        <div className=" md:ml-[30px] md:text-start text-center md:max-w-[450px] max-w-[19em] ">
          <h2 className="  lg:text-[32px] text-[24px] text-[#000] font-Balsamiq font-bold">
            Instant Notifcations
          </h2>
          <p className="text-[#4F535D] md:pt-[20px] text-sm sm:text-base font-normal  font-Balsamiq">
            Unlike others, our notifcations have no delay! Hear about
            cancellations and new availabilities at the most competitive
            campgrounds, the moment they open up.
          </p>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal  font-Balsamiq">
            Be the frst to book your favorite campsite!
          </p>
        </div>
      </div>
    </>
  )
}

export default Instantnotification
