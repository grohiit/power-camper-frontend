import React from "react";
import Image from "next/image";

const Unlimited = () => {
  return (
    <>
      <div className="md:columns-2   md:pb-20 pb-24 flex md:justify-between items-center justify-center md:flex-row flex-col-reverse">
        <div className=" md:mr-[30px] md:text-start text-center max-w-[450px] ">
          <h1 className="   lg:text-[32px] text-[24px]  text-[#000] font-bold font-Balsamiq  ">
            Unlimited Customizations!
          </h1>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal md:max-w-[450px] mx-auto max-w-[19em] font-Balsamiq">
            Want to look for two specifc weekends in a tent for two?
          </p>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal md:max-w-[450px] mx-auto max-w-[19em]  font-Balsamiq">
            Howabout only campsites 64-67 at Carlsbad, and sites 23&24 at
            Clemente?
          </p>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal md:max-w-[450px] mx-auto max-w-[19em] font-Balsamiq">
            Maybe you need a campsite that can ft a 42’ trailer and has a 50-amp
            hookup?
          </p>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal md:max-w-[450px] mx-auto max-w-[19em] font-Balsamiq">
            All these preferences (and more!) can be set up so you know exactly
            what you’re getting
          </p>
        </div>
        <div className=" flex items-center mb-[25px] md:mt-[0px] mt-[80px]">
          <Image
            className="w-full "
            src="/img/png/Unlimited.png"
            alt="Logo"
            width={367}
            height={269}
          />
        </div>
      </div>
    </>
  );
};

export default Unlimited;
