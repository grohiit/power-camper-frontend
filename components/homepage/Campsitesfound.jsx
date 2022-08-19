import React from 'react'
import DropDown from '../common/DropDown'
import 'react-dropdown/style.css'
import Image from 'next/image'
import { Downarrow } from '../common/Icons'
const Campsitesfound = () => {
  return (
    <>
      <div className="bg-[#F8F6F4]">
        <div className="container mx-auto pt-[20px] md:pt-[30px] text-center">
          <div className="text-center pb-5 md:pb-[30px]">
            <h2 className="font-Balsamiq text-xl sm:text-2xl px-[30px] sm:px-0 text-black font-bold">
              258 campsites found in the past week!
            </h2>
            {/* <div className="w-[213px] lg:w-[246px] h-[47px] lg:h-[52px] mt-[34px]  mx-auto homepage_dropdown">
              <DropDown
                className="bg-[#3F503B]   rounded-md"
                onChange={(e) => {
                  console.log(e)
                }}
                placeholder="See How It Works!"
                options={['One', 'Second', 'Three']}
              />
            </div> */}
            <a href="#about">
              <button
                type="button"
                link
                to="#about"
                className="text-white work-btn text-center font-Balsamiq font-bold text-base md:text-xl border md:mt-[22px] mt-[15px] rounded-md  border-[#243C5A] border-solid bg-[#3F503B] px-7 py-[10px] hover:border hover:border-solid hover:border-[#243C5A] hover:text-[#3F503B]       hover:bg-transparent leading-[20px] "
              >
                See How It Works! <Downarrow />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[-2px] ">
        <Image
          className="w-full "
          src="/img/png/waves/campsitesfound_wave.png"
          alt="Logo"
          width={1920}
          height={81}
          layout="responsive"
        />
      </div>
    </>
  )
}

export default Campsitesfound
