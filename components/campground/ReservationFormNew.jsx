import React, { useState } from 'react'
import DropDown from '../common/DropDown'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-dropdown/style.css'

const ReservationForm = ({ name, facilityID }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [checkOutDate, setCheckOutdate] = useState(new Date())
  const [state, setState] = useState('CA')
  const [campground, setCampground] = useState(facilityID)
  const handleFormSubmit = (e) => {
    alert(`${state} and ${campground}`)
    e.preventDefault()
  }
  const handleCampgroundChange = (e) => {}

  return (
    <>
      <div className="lg:w-[600px] lg:pl-[25px] mb-6 lg:mb-0 mx-auto lg:ml-auto bg-[#754C29]/[0.8] rounded-lg px-1 py-4 sm:p-4 md:p-11">
        <h2 className="font-Bubblegum text-white text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-5 max-w-md mx-auto text-center">
          {name} Sold Out?
          <span className="block">We can get you a reservation!</span>
        </h2>
        <div className="get_started_box py-6 sm:py-8 px-2 sm:px-6 max-w-md mx-auto">
          <h4 className="text-xl lg:text-2xl font-medium font-Bubblegum text-center text-white mb-5 lg:mb-7">
            Get Started Here
          </h4>

          <form onSubmit={handleFormSubmit}>
            <div className="flex sm:w-96 justify-between mb-4 sm:mb-6 items-center content-start">
              <div className="w-24 text-center">
                <select
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option val="CA">CA</option>
                </select>
              </div>
              <div className="w-64 text-center">
                <select
                  id="facilityID"
                  name="facilityID"
                  value={campground}
                  onChange={(e) => setCampground(e.target.value)}
                >
                  <option value="120010">Bolsa Chica State Beach</option>
                  <option value="120015">Carpinteria State Beach</option>
                  <option value="120742">Crystal Cove Beach Cottages</option>
                  <option value="123400">Crystal Cove Moro Campground</option>
                  <option value="120025">Doheny State Beach</option>
                  <option value="120030">El Capitan State Beach</option>
                  <option value="120047">Leo Carrillo State Park</option>
                  <option value="120082">San Clemente State Beach</option>
                  <option value="120083">San Elijo State Beach</option>
                  <option value="120087">Seacliff State Beach</option>
                  <option value="120263">Silver Strand State Beach</option>
                  <option value="120090">South Carlsbad State Beach</option>
                </select>
              </div>
            </div>
            <div className="flex  sm:w-96 justify-between mb-4 sm:mb-6 items-center">
              <label className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                Site Type:
              </label>
              <select id="category_types" name="category_types">
                <option value="RV Site">RV</option>
                <option value="Tent Site">Tent</option>
                <option value="Trailer Site">Trailer</option>
              </select>
              <select id="maxeqplen" name="maxeqplen">
                <option value="10">10 ft. - 20 ft.</option>
                <option value="20">20 ft. - 30 ft.</option>
                <option value="30">30 ft. - 38 ft.</option>
                <option value="39">38 ft.+</option>
              </select>
            </div>
            <div className="flex sm:w-96 justify-between mb-4 sm:mb-6 items-center">
              <label className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                Number in your party:
              </label>
              <select id="maxpeople" name="maxpeople">
                <option value="1">1-3</option>
                <option value="6">3-6</option>
              </select>
            </div>
            <div className="flex  sm:w-96 justify-between mb-12 items-center">
              <label class="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                Check In Date:
              </label>
              <DatePicker
                className="bg-transparent py-2.5 pl-2 w-[auto] relative "
                id="frombox"
                type="text"
                name="from"
                value="Friday, Oct 7 2022"
              />
            </div>
            <div className="flex  sm:w-96 justify-between mb-12 items-center">
              <label class="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                Check Out Date:
              </label>
              <DatePicker
                className="bg-transparent py-2.5 pl-2 w-[auto] relative"
                id="tobox"
                type="text"
                name="to"
                value="Sunday, Oct 9 2022"
              />
            </div>
            <div className="text-center my-5">
              <button
                type="submit"
                className="bg-[#FFFFFF] py-[8px] px-[16px] lg:px-[28px] border-2 rounded-full  text-[#4E5F4C] font-normal  font-Bubblegum border-transparent ml-[16px] md:ml-[20px] text-sm lg:text-base  hover:opacity-70 ease-in-out duration-75"
              >
                Continue to Step 2
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default ReservationForm
