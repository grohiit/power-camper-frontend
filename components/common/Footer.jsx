import React from 'react'
import Image from 'next/image'
import {
  DiscordIcon,
  InstgramIcon,
  OpenseaIcon,
  SearchbarbuttonIcon,
  SearchIcon,
  StarIcon,
} from './Icons'
import Link from 'next/link'

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
            <div className="lg:w-[200px] mb-10 lg:mb-4 flex flex-col justify-center items-center lg:items-start">
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
            <div className="flex justify-center sm:justify-between flex-wrap  lg:w-[455px] ">
              <ul className="mb-10 sm:mb-4 w-46  footer-links-hover text-center sm:text-left">
                <p className="text-white text-sm lg:text-base mb-4  font-bold font-Cabin ">
                  Useful links
                </p>
                <Link href="/#about" passHref>
                  <a className="text_decoration">
                    <li className="text-white text-sm lg:text-base mb-3   font-Cabin opacity-70">
                      About Page
                    </li>
                  </a>
                </Link>
                <Link href="/#contact" passHref>
                  <a className="text_decoration">
                    <li className="text-white text-sm lg:text-base mb-3   font-Cabin opacity-70">
                      Contact Us
                    </li>
                  </a>
                </Link>
                <Link href="#FAQs" passHref>
                  <a className="text_decoration">
                    <li className="text-white text-sm lg:text-base mb-3   font-Cabin opacity-70">
                      FAQ
                    </li>
                  </a>
                </Link>

                <a
                  className="text_decoration"
                  href="https://app.powercamper.com/login"
                >
                  <li className="text-white text-sm lg:text-base sm:mb-3   font-Cabin opacity-70">
                    Login
                  </li>
                </a>
              </ul>
              <ul className="mb-4 w-full sm:w-60  text-center sm:text-left  ">
                <p className="text-white text-sm lg:text-base  font-bold font-Cabin mb-4 ">
                  Looking for Sold Out Campsites?
                </p>
                <div className="  text-center sm:text-left  ">
                  <button
                    type="button"
                    className="bg-[#ffffff] py-3.5  hover:opacity-80    search_button      px-4 border-2 rounded-md   mx-auto sm:mx-0  flex items-center justify-center	  text-[#000000]   font-Balsamiq border-transparent   text-sm sm:text-base font-normal "
                  >
                    <span className="leading-3">Search Now</span>
                  </button>
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
  )
}

export default Footer
