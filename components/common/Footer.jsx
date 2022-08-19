import React from "react";
import Image from "next/image";
import { DiscordIcon, InstgramIcon, OpenseaIcon, StarIcon } from "./Icons";

const Footer = () => {
  return (
    <>
      <section className="mt-20 lg:mt-28 xl:mt-36 bg-[#3D4F3B] ">
        <div className="topWaveImg">
          <Image
            className="w-full "
            src="/img/png/rivermap/top_wave.png"
            alt="topWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>
        <div className="container mx-auto my-12">
          <div className="lg:flex justify-between flex-wrap">
            <div className="lg:w-1/4 mb-14 lg:mb-4 flex flex-col justify-center items-center lg:items-start">
              <a href="#">
                <Image
                  className="mb-5 "
                  src="/img/svg/footerLogo.svg"
                  width={192}
                  height={73}
                  alt="footerLogo"
                  layout="intrinsic"
                />
              </a>
              <p className="text-white text-sm md:text-sm lg:text-base  font-Cabin opacity-70 mb-5 sm:mb-7 text-center lg:text-start ">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
              <div className="flex items-center">
                <a
                  target="_blank"
                  href="https://instagram.com/"
                  rel="noopener noreferrer"
                  className="hover:scale-125 ease-in-out duration-200"
                >
                  <InstgramIcon />
                </a>
                <a
                  target="_blank"
                  href="https://discord.com/"
                  rel="noopener noreferrer"
                  className="mx-3 hover:scale-125 ease-in-out duration-200"
                >
                  <DiscordIcon />
                </a>
                <a
                  target="_blank"
                  href="https://opensea.io/"
                  rel="noopener noreferrer"
                  className="hover:scale-125 ease-in-out duration-200"
                >
                  <OpenseaIcon />
                </a>
              </div>
            </div>
            <div className="flex justify-between flex-wrap  lg:w-2/4 ">
              <ul className="mb-4 w-20 text-center footer-links-hover">
                <p className="text-white text-sm lg:text-base  font-bold font-Cabin ">
                  About us
                </p>
                <a className="text_decoration" href="#About">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    About us
                  </li>
                </a>
                <a className="text_decoration" href="#About">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    About us
                  </li>
                </a>
                <a className="text_decoration" href="#About">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    About us
                  </li>
                </a>
                <a className="text_decoration" href="#About">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    About us
                  </li>
                </a>
                <a className="text_decoration" href="#About">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    About us
                  </li>
                </a>
              </ul>
              <ul className="mb-4 w-20 text-center footer-links-hover">
                <p className="text-white text-sm lg:text-base  font-bold font-Cabin ">
                  Activities
                </p>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
              </ul>
              <ul className="mb-4 w-20 text-center footer-links-hover">
                <p className="text-white text-sm lg:text-base  font-bold font-Cabin ">
                  Rules
                </p>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
              </ul>
              <ul className="mb-4 w-20 text-center footer-links-hover">
                <p className="text-white text-sm lg:text-base  font-bold font-Cabin ">
                  Sold Out
                </p>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
                <a className="text_decoration" href="#">
                  <li className="text-white text-sm lg:text-base   font-Cabin opacity-70">
                    Links
                  </li>
                </a>
              </ul>
              <ul className="mb-4 w-full sm:w-36 text-center">
                <p className="text-white text-sm lg:text-base  font-bold font-Cabin mb-5 ">
                  Overall Rating
                </p>

                <div className="flex justify-center">
                  <span className="mr-1 star_active">
                    <StarIcon />
                  </span>
                  <span className="mr-1 star_active">
                    <StarIcon />
                  </span>
                  <span className="mr-1 star_active">
                    <StarIcon />
                  </span>
                  <span className="mr-1 star_active">
                    <StarIcon />
                  </span>
                  <span className="star_active">
                    <StarIcon />
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t text-center opacity-70 py-3 ">
          <p className="text-white text-sm lg:text-base    font-Cabin">
            copyright@2022
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
