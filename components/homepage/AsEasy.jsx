import React from "react";
import { CompsiteIcon, NotificationIcon, ScanIcon } from "../common/Icons";

const AsEasy = () => {
  return (
    <>
      <div className="container pb-6 md:pb-[4em]">
        <div>
          <h2 className="text-center font-Balsamiq md:text-5xl  text-[32px] text-black font-bold mb-16 md:mb-20 md:pb-2.5">
            As Easy As 1,2,3!
          </h2>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="text-center w-auto md:w-[230px] mb-10 md:mb-0 ">
            <div className="w-28 h-28  md:w-36 md:h-36 mb-6 sm:mb-8 bg-[#F8F6F4] flex justify-center items-center compsite_circle_border border-2 border-dashed border-[#754C29] rounded-full mx-auto">
              <span>
                <ScanIcon />
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-Balsamiq font-bold">
              Set Up A Scan
            </h2>
          </div>
          <div className="text-center w-auto md:w-[230px] mb-10 md:mb-0 ">
            <div className="w-28 h-28  md:w-36 md:h-36 mb-6 sm:mb-8 bg-[#F8F6F4] flex justify-center items-center compsite_circle_border border-2 border-dashed border-[#754C29] rounded-full mx-auto">
              <span>
                <NotificationIcon />
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-Balsamiq font-bold">
              Get A Notifcation
            </h2>
          </div>
          <div className="text-center w-auto md:w-[230px] mb-10 md:mb-0 ">
            <div className="w-28 h-28  md:w-36 md:h-36 mb-6 sm:mb-8 bg-[#F8F6F4] flex justify-center items-center border-2 border-dashed border-[#754C29] rounded-full mx-auto">
              <span>
                <CompsiteIcon />
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-Balsamiq font-bold">
              Book Your Campsite!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsEasy;
