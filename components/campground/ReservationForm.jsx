import React, { useState } from 'react'
import DropDown from '../common/DropDown'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-dropdown/style.css'

const ReservationForm = ({ name }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [checkOutDate, setCheckOutdate] = useState(new Date())

  return (
    <>
      <div className=" sm:w-[525px] xl:w-[600px] xl:pl-[25px] mb-6 xl:mb-0 mx-auto xl:ml-auto">
        <div className="bg-[#754C29]/[0.8] rounded-lg px-1 py-4 sm:p-4 md:p-11  ">
          <h2 className="font-Bubblegum text-white text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-5 max-w-md mx-auto text-center">
            {name} Sold Out?
            <span className="block">We can get you a reservation!</span>
          </h2>
          <div className="get_started_box py-6 sm:py-8 px-2 sm:px-6 max-w-md mx-auto">
            <h4 className="text-xl lg:text-2xl font-medium font-Bubblegum text-center text-white mb-5 lg:mb-7">
              Get Started Here
            </h4>
            <div className="flex sm:w-96 justify-between mb-4 sm:mb-6 items-center">
              <div className="w-24 mr-3">
                <DropDown
                  onChange={(e) => {
                    console.log(e)
                  }}
                  placeholder="CA"
                  options={['One', 'Second', 'Three']}
                />
              </div>
              <div className="w-64">
                <DropDown
                  placeholder="Doheny State Beach"
                  options={['One', 'Second', 'Three']}
                />
              </div>
            </div>
            <div className="flex  sm:w-96 justify-between mb-4 sm:mb-6 items-center">
              <div className="">
                <p className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                  Site Type:
                </p>
              </div>
              <div className="sm:w-64 flex justify-between">
                <div className="sm:w-[134px] mb-3 sm:mb-0  mr-3 ">
                  <DropDown
                    placeholder="RV"
                    options={['One', 'Second', 'Three']}
                    className="font-Cabin text-sm lg:text-base  text-white "
                  />
                </div>
                <div className="sm:w-[108px]">
                  <DropDown
                    placeholder="10FT"
                    options={['One', 'Second', 'Three']}
                  />
                </div>
              </div>
            </div>
            <div className="flex  sm:w-96 justify-between mb-4 sm:mb-6 items-center">
              <div className="">
                <p className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                  Number in your party:
                </p>
              </div>
              <div className="sm:w-[108px]">
                <DropDown placeholder="01" options={['01', '02', '03']} />
              </div>
            </div>
            <div className="flex  sm:w-96 justify-between mb-4 sm:mb-6 items-center">
              <div className="">
                <p className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                  Check in Date:
                </p>
              </div>
              <div className="w-[auto] relative ">
                <DatePicker
                  className="data-picker-bg py-2.5 pl-2"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <div className="Dropdown-arrow absoulte"></div>
              </div>
            </div>
            <div className="flex  sm:w-96 justify-between mb-12 items-center">
              <div className="">
                <p className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                  Check Out Date:
                </p>
              </div>
              <div className="w-[auto] relative">
                <DatePicker
                  className="data-picker-bg py-2.5 pl-2"
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutdate(date)}
                />
                <div className="Dropdown-arrow absoulte"></div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="bg-[#FFFFFF] py-[8px] px-[16px] lg:px-[28px] border-2 rounded-full  text-[#4E5F4C] font-normal  font-Bubblegum border-transparent ml-[16px] md:ml-[20px] text-sm lg:text-base  hover:opacity-70 ease-in-out duration-75"
              >
                Continue to Step 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReservationForm
