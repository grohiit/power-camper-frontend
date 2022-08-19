import React from "react";
import Image from "next/image";

const Scanone = () => {
  return (
    <>
      <div className="md:columns-2 mb:20 md:mb-[50px] flex md:justify-between items-center justify-center md:flex-row flex-col-reverse">
        <div className="md:mr-[30px] md:text-start text-center md:max-w-[450px] max-w-[19em]">
          <h2 className="  lg:text-[32px] text-[24px] text-[#000] font-Balsamiq   font-bold">
            Scan One, Scan All!
          </h2>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal  font-Balsamiq    ">
            Just looking to re-live that amazing experience at Doheny? No
            problem.
          </p>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal  font-Balsamiq    ">
            Want to watch your favorite few campgrounds? You can do that too!
          </p>
          <p className="text-[#4F535D] pt-[20px] text-sm sm:text-base font-normal  font-Balsamiq   ">
            Dying to get back out in the wild, no matter where? Scan our whole
            inventory! There’s no extra fees!
          </p>
        </div>
        <div className="flex items-center mb-[25px] md:mb-0 md:mt-[0px] mt-[80px]">
          <Image
            className="w-full "
            src="/img/png/Scanone.png"
            alt="Logo"
            width={367}
            height={269}
          />
        </div>
      </div>
    </>
  );
};

export default Scanone;
