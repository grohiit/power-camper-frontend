import { useState, useEffect } from 'react'
import { HeaderCrossIcons2, ToggleIcon2 } from './Icons'
import Image from 'next/image'
import 'react-dropdown/style.css'

import Link from 'next/link'

const Navbar = () => {
  const [navOverlay, setNavOverlay] = useState(false)

  useEffect(() => {
    if (navOverlay) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [navOverlay])

  return (
    <>
      {/* This is Nav for mobile */}
      {navOverlay && (
        <div className="fixed bg-[#fff] top-0 h-full flex flex-col justify-center items-center z-20 w-full border-2">
          <ul className="text-center">
            <li
              className="py-3 list-none"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Link href="/about-us">
                <a
                  onClick={() => setNavOverlay(false)}
                  className="text-[#4F535D]  font-bold font-Balsamiq text-sm lg:text-base"
                  aria-current="page"
                >
                  About
                </a>
              </Link>
            </li>
            <li
              className="py-3 list-none"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Link href="/contact">
                <a
                  onClick={() => setNavOverlay(false)}
                  className="text-[#4F535D]  font-bold font-Balsamiq text-sm lg:text-base"
                  aria-current="page"
                >
                  Contact
                </a>
              </Link>
            </li>
            <li
              className="py-3 list-none"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="flex items-center justify-center w-full  sm:static sm:inset-auto  ">
                <a href="https://app.powercamper.com/login">
                  <button
                    type="button"
                    className="bg-[#3F503B] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	  text-[#ffffff] font-normal  font-Bubblegum border-transparent  text-md lg:text-base hover:border hover:border-solid hover:border-[#243C5A] hover:text-[#3F503B] hover:bg-transparent   ease-in-out duration-200"
                  >
                    Login
                  </button>
                </a>
                <a href="https://app.powercamper.com/request?clear=1">
                  <button
                    type="button"
                    className="bg-[#754C29] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	ml-[20px]  hover:bg-[transparent] hover:border-2 hover:border-[#754C29] hover:text-[#754C29] text-[#ffffff] font-normal  font-Bubblegum border-transparent  text-md lg:text-base hover:opacity-70 ease-in-out duration-200"
                  >
                    Start
                  </button>
                </a>
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
      {/* This is Nav for Desktop */}
      <nav className={` bg-white w-full md:py-2 shadow-sm  top-0`}>
        {/* removed absolute */}
        <div className="max-w-7xl mx-auto px-2 py-[13px] sm:px-6 lg:px-8">
          <div className="flex-1 flex items-center justify-between sm:items-center  ">
            <div className="  flex items-center  ">
              <Link href="/" passHref>
                <span className="cursor-pointer flex justify-center items-center">
                  <Image
                    className="w-full "
                    src="/img/svg/logotwo.svg"
                    alt="Logo"
                    width={65}
                    height={33}
                    layout="intrinsic"
                  />
                  <h2 className="font-Balsamiq text-[#764C29] text-xl md:text-2xl font-bold leading-[19px] sm:leading-[24px] ml-1 sm:ml-3 ">
                    Power Camper
                  </h2>
                </span>
              </Link>
            </div>
            <div className="hidden sm:flex justify-center items-center">
              <div className="   w-full hidden sm:flex justify-center">
                {/* <Link href="/test">
                  <a className="text-[#4F535D] px-3 flex  hover:text-[#754C29]  flex-col whitespace-nowrap justify-center ease-in duration-200  font-Balsamiq text-sm lg:text-base">
                    Test
                  </a>
                </Link> */}
                <Link href="/about-us">
                  <a className="text-[#4F535D] px-3 flex  hover:text-[#754C29]  flex-col whitespace-nowrap justify-center ease-in duration-200  font-Balsamiq text-sm lg:text-base">
                    About
                  </a>
                </Link>
                <Link href="https://codetocashflow.com/contact" shallow={false}>
                  <a className="text-[#4F535D] px-3 flex  hover:text-[#754C29]  flex-col whitespace-nowrap justify-center ease-in duration-200  hover:text-red   font-Balsamiq text-sm lg:text-base">
                    Contact
                  </a>
                </Link>
              </div>

              <div className="   hidden sm:flex items-center justify-end w-full   sm:static sm:inset-auto  ">
                <Link href="https://app.powercamper.com/login" passHref>
                  <button
                    type="button"
                    className="bg-[#3F503B] hover:bg-[transparent] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	hover:border-2 hover:border-[#3F503B]  hover:text-[#3F503B] text-[#ffffff] font-normal  font-Bubblegum border-transparent  ml-[20px] text-md lg:text-base  ease-in-out duration-200"
                  >
                    Login
                  </button>
                </Link>
                <Link
                  href="https://app.powercamper.com/request?clear=1"
                  passHref
                >
                  <button
                    type="button"
                    className="bg-[#754C29] py-[5px] px-[15px] lg:px-[23px] hover:bg-[transparent] border-2 rounded-md	hover:border-2 hover:border-[#754C29] text-[#ffffff] hover:text-[#754C29] font-normal  font-Bubblegum border-transparent  ml-[20px] text-md lg:text-base  ease-in-out duration-200"
                  >
                    Start
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center sm:hidden  ">
              <a href="https://app.powercamper.com/login">
                <button
                  type="button"
                  className="bg-[#3F503B] hover:bg-[transparent] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	hover:border-2 hover:border-[#3F503B]  hover:text-[#3F503B] text-[#ffffff] font-normal  font-Bubblegum border-transparent    text-md lg:text-base  ease-in-out duration-200"
                >
                  Login
                </button>
              </a>
              <button
                onClick={() => setNavOverlay(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-label="toggle"
                aria-expanded="false"
              >
                <ToggleIcon2 />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
