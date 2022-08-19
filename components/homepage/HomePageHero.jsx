import React from 'react'
import { SearchbarbuttonIcon } from '../common/Icons'
import Navbar from './Navbar'
const HomePageHero = () => {
  return (
    <>
      <div className="bg-[url('/img/png/HeaderImg/hero.webp')] bg-no-repeat bg-center flex flex-col min-h-80vh bg-cover">
        <Navbar />
        <div className="justify-center sm:items-center flex grow pt-[70px] sm:pt-0 ">
          <div className="container ">
            <div className="md:max-w-4xl mx-auto text-center">
              <h1 className="font-Balsamiq md:text-6xl text-5xl text-[#fff] font-bold leading-[119%]">
                Get notifed of campground availabilities instantly!
              </h1>
              <div className="text-center ">
                <button
                  type="button"
                  className="bg-[#ffffff] py-3.5  hover:opacity-80    search_button      px-[30px] border-2 rounded-md mt-[44px] m-auto  flex items-center justify-center	  text-[#000000]   font-Balsamiq border-transparent   text-sm sm:text-base font-normal "
                >
                  <span className="leading-3">Start Search</span>
                  <span className="ml-[12px] ">
                    <SearchbarbuttonIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageHero
