import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Insta } from "../common/Icons";
import PowerCamperMember from "./PowerCamperMember";

const Footercamp = () => {
  return (
    <>
      <div className="mb-[-2px] ">
        <Image
          className="w-full "
          src="/img/png/footer/footerWave.png"
          alt="Logo"
          width={1920}
          height={81}
          layout="responsive"
        />
      </div>
      <div className="footer_section  pt-7 sm:pt-12     bg-[#1B120A]   ">
        <div className=" container mx-auto  mb-10 sm:mb-20 ">
          <div className="colums-2  flex flex-col md:flex-row">
            {/* column-1  */}
            <div className=" w-[100%]  lg:w-[50%] text-center md:text-left  ">
              <div className="flex items-center justify-center md:justify-start mb-10 lg:mb-14 ">
                <Image
                  className="w-full "
                  src="/img/svg/footerLogoTwo.svg"
                  alt="Logo"
                  width={72}
                  height={35}
                  layout="intrinsic"
                />
                <h3 className="font-bold font-Balsamiq text-xl ml-3 text-sm  md:text-[22px] leading-[20px] text-white">
                  Power Camper
                </h3>
              </div>
              <p className="text-white opacity-70   mb-4 sm:mb-5 font-normal font-Balsamiq ">
                Follow Us On
              </p>
              <div className="flex   justify-center md:justify-start ">
                <a
                  href="http://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="http://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <Twitter />
                </a>
                <a
                  href="http://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <Insta />
                </a>
              </div>
            </div>
            {/* columns-2  */}
            <div className="columns-2 mt-12 md:mt-0 w-[100%]  lg:w-[50%]  flex  flex-col md:flex-row">
              {/* column-1  */}
              <div className=" w-[100%] md:w-[45%] mb-10 md:my-0 text-center md:text-left ">
                <h1 className="text-white font-bold text-base   ">
                  Learn More
                </h1>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-white opacity-70  font-normal font-Balsamiq my-2 hover:text-[#BAB795] text-base text-decoration-none"
                    >
                      Help Center & FAQ
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-white opacity-70  font-normal font-Balsamiq my-2 hover:text-[#BAB795] text-base text-decoration-none"
                    >
                      Camping Guides
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-white opacity-70  font-normal font-Balsamiq my-2 hover:text-[#BAB795] text-base text-decoration-none"
                    >
                      All Campgrounds
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-white opacity-70  font-normal font-Balsamiq my-2 hover:text-[#BAB795] text-base text-decoration-none"
                    >
                      Terms & Conditions/Privacy
                    </a>
                  </li>
                </ul>
              </div>
              {/* column 2 */}
              <div className="w-[100%]  md:w-[50%] text-center md:text-left ">
                <h1 className="text-white font-bold font-Balsamiq text-base  ">
                  Contact Us
                </h1>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-white opacity-70  font-normal font-Balsamiq my-2 hover:text-[#BAB795] text-base text-decoration-none"
                    >
                      Live Chat!
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="#"
                      className="text-white opacity-70  font-normal font-Balsamiq my-2 hover:text-[#BAB795] text-base text-decoration-none"
                    >
                      Account Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white opacity-70  font-normal py-3    border-t-[1px] border-[#BAB795] border-solid  text-xs text-center">
            Copyright Power Camper @2022. All right reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footercamp;
