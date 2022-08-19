import React, { useState, useEffect } from "react";
import {
  HeaderCrossIcons,
  HeaderCrossIcons2,
  ToggleIcon,
  ToggleIcon2,
} from "./Icons";
import Image from "next/image";

import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [navOverlay, setNavOverlay] = useState(false);

  useEffect(() => {
    if (navOverlay) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [navOverlay]);

  return (
    <>
      {navOverlay && (
        <div className="fixed bg-white shadow-sm top-0 h-full flex flex-col justify-center items-center z-20 w-full">
          <ul className="text-center">
            <li className="py-3" data-aos="fade-up" data-aos-duration="400">
              <a
                href="#"
                onClick={() => setNavOverlay(false)}
                className="  text-[#4F535D] font-bold font-Cabin text-sm lg:text-base "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="py-3" data-aos="fade-up" data-aos-duration="600">
              <a
                href="#Green-map"
                onClick={() => setNavOverlay(false)}
                className="  text-[#4F535D]  my-20 font-bold font-Cabin text-sm lg:text-base "
                aria-current="page"
              >
                Campgrounds
              </a>
            </li>
            <li className="py-3" data-aos="fade-up" data-aos-duration="800">
              <a
                href="#About"
                onClick={() => setNavOverlay(false)}
                className="  text-[#4F535D] font-bold font-Cabin text-sm lg:text-base "
                aria-current="page"
              >
                About us
              </a>
            </li>
            <li className="py-3" data-aos="fade-up" data-aos-duration="1000">
              <a
                href="#Contact"
                onClick={() => setNavOverlay(false)}
                className="  text-[#4F535D]  font-bold font-Cabin text-sm lg:text-base "
                aria-current="page"
              >
                Contact
              </a>
            </li>
            <li className="py-3" data-aos="fade-up" data-aos-duration="1200">
              <div className="flex items-center justify-end w-full   sm:static sm:inset-auto  ">
                <button
                  type="button"
                  className="bg-transparent border-[#FFFFFF] border-2  py-[8px] px-[16px] lg:px-[28px] rounded-full  text-white font-normal  font-Bubblegum text-md lg:text-base hover:opacity-70 ease-in-out duration-200"
                >
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
          <div className="absolute top-0 right-0 px-5 py-6  ">
            <button onClick={() => setNavOverlay(false)}>
              <HeaderCrossIcons2 />
            </button>
          </div>
        </div>
      )}
      <nav className="bg-white shadow-sm absolute top-0 w-full ">
        <div className="max-w-7xl mx-auto px-2 py-[12px] sm:py-[4px] sm:px-6 lg:px-8">
          <div className="flex-1 flex items-center justify-between sm:items-center  ">
            <div className="flex items-center  w-full">
              <span
                onClick={() => router.push("/")}
                className="cursor-pointer flex justify-center items-center"
              >
                <Image
                  className="w-full "
                  src="/img/svg/logotwo.svg"
                  alt="Logo"
                  width={65}
                  height={33}
                  layout="intrinsic"
                />
                <h2 className="font-Balsamiq text-black text-sm lg:text-base font-bold leading-[19px] sm:leading-[24px] ml-1 sm:ml-3 whitespace-nowrap ">
                  Power Camper
                </h2>
              </span>
            </div>
            <div className="   w-full hidden sm:flex justify-center">
              <a
                href="#"
                className=" text-[#4F535D] px-2 flex flex-col whitespace-nowrap justify-center h-20 ease-in duration-200 border-transparent border-b-4 hover:border-b-4 hover:bg-[#475845] hover:text-white    font-Cabin text-sm lg:text-base "
                aria-current="page"
              >
                Home
              </a>

              <a
                href="#Green-map"
                className="text-[#4F535D] px-2 flex flex-col whitespace-nowrap justify-center h-20 ease-in duration-200 border-transparent border-b-4 hover:border-b-4 hover:bg-[#475845] hover:text-white  font-Cabin text-sm lg:text-base"
              >
                Campgrounds
              </a>

              <a
                href="#About"
                className="text-[#4F535D] px-2 flex flex-col whitespace-nowrap justify-center h-20 ease-in duration-200 border-transparent border-b-4 hover:border-b-4 hover:bg-[#475845]  hover:text-white font-Cabin text-sm lg:text-base"
              >
                About us
              </a>

              <a
                href="#Contact"
                className="text-[#4F535D] px-2 flex flex-col whitespace-nowrap justify-center h-20 ease-in duration-200 border-transparent border-b-4 hover:border-b-4 hover:bg-[#475845] hover:text-white  font-Cabin text-sm lg:text-base"
              >
                Contact
              </a>
            </div>

            <div className="    flex items-center justify-end w-full   sm:static sm:inset-auto  ">
              <button
                type="button"
                className="hidden sm:block bg-transparent border-[#FFFFFF] border-2  py-[6px] px-[20px] lg:px-[28px] rounded-full  text-white font-normal  font-Bubblegum text-md lg:text-base hover:opacity-70 ease-in-out duration-200"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="bg-[#3D4F3B] py-[6px] px-[20px] lg:px-[28px] border-2 rounded-full  text-white font-normal  font-Bubblegum border-transparent  md:ml-[20px] text-md lg:text-base hover:opacity-70 ease-in-out duration-200"
              >
                Log in
              </button>
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setNavOverlay(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <ToggleIcon2 />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
