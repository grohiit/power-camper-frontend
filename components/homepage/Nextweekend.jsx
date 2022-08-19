import React from "react";
import Image from "next/image";
const Nextweekend = () => {
  return (
    <>
      <div className="md:columns-2 mb:20 md:mb-[50px] flex md:justify-between items-center justify-center md:flex-row flex-col">
        <div className=" flex items-center mb-[25px] md:mb-0 md:mt-[0px] mt-[80px]">
          <Image
            className="w-full "
            src="/img/png/Nextweekend.png"
            alt="Logo"
            width={367}
            height={269}
          />
        </div>
        <div className="md:ml-[30px] md:text-start text-center max-w-[450px]">
          <h2 className="   lg:text-[32px] text-[24px] text-[#000] font-Balsamiq   font-bold">
            For Next Weekend or Next July
          </h2>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal md:max-w-[450px] max-w-[22em] mx-auto font-Balsamiq  ">
            Our system allows you to set up specifc dates, or get notifed of a
            new availability anytime in the next 6 months!
          </p>
        </div>
      </div>
    </>
  );
};

export default Nextweekend;
