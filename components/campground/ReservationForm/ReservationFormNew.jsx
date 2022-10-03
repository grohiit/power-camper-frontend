import { useState } from 'react'
import SiteTypeSelectField from './SiteTypeSelectField'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-dropdown/style.css'
import SelectOption from './SelectOption'
import { formInputData } from '@/components/common/Content'
import TrailerLengthSelectField from './TrailerLengthSelectField'
import MaxPeopleSelectField from './MaxPeopleSelectField'

const ReservationForm = ({ name, facilityID }) => {
  const today = new Date()
  const [startDate, setStartDate] = useState(new Date())
  const [checkOutDate, setCheckOutdate] = useState(
    today.setDate(today.getDate() + 2)
  )
  const [state, setState] = useState('CA')
  const [campground, setCampground] = useState(facilityID)
  const [siteTypes, setSiteTypes] = useState(
    formInputData.filter((v) => v.facilityID == facilityID)[0]['siteTypes']
  )
  const [siteTypeSelected, setSiteTypeSelected] = useState(
    `${siteTypes[0]} Site`
  )
  const [maxLength, setMaxLength] = useState(
    formInputData.filter((v) => v.facilityID == facilityID)[0]['maxLength']
  )

  const [maxPeople, setMaxPeople] = useState(
    formInputData.filter((v) => v.facilityID == facilityID)[0]['maxPeople']
  )

  const handleCampgroundChange = (e) => {
    const facilityID = e.target.value
    setSiteTypes(
      formInputData.filter((v) => v.facilityID == facilityID)[0]['siteTypes']
    )
    setMaxLength(
      formInputData.filter((v) => v.facilityID == facilityID)[0]['maxLength']
    )
    setMaxPeople(
      formInputData.filter((v) => v.facilityID == facilityID)[0]['maxPeople']
    )

    setCampground(facilityID)
  }
  const handleSiteTypeChange = (e) => {
    setSiteTypeSelected(e.target.value)
  }

  // `${days[date.getDay()]}, ${date.toLocaleString('en-us', {
  //   dateStyle: 'medium',
  // })}`

  return (
    <>
      <div className=" mb-6 lg:mb-0 mx-auto lg:ml-auto bg-[#754C29]/[0.8] rounded-lg px-1 py-4 sm:p-4 md:p-11 w-full">
        <h2 className="font-Bubblegum text-white text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-5 max-w-md mx-auto text-center">
          {name} Sold Out?
          <span className="block">We can get you a reservation!</span>
          {facilityID}
        </h2>
        <div className="get_started_box py-6 sm:py-8 px-2 sm:px-6 max-w-md mx-auto">
          <h4 className="text-xl lg:text-2xl font-medium font-Bubblegum text-center text-white mb-5 lg:mb-7">
            Get Started Here
          </h4>

          <form
            method="POST"
            action="https://app.powercamper.com/request_review"
          >
            <div className="flex justify-around mb-4">
              <select
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option val="CA">CA</option>
              </select>
              <select
                id="facilityID"
                name="facilityID"
                value={campground}
                onChange={handleCampgroundChange}
              >
                {formInputData.map((campground, index) => (
                  <SelectOption
                    option={[campground.facilityID, campground.name]}
                    key={index}
                  />
                ))}
              </select>
            </div>
            <div className="flex justify-between mb-4">
              <SiteTypeSelectField
                siteTypes={siteTypes}
                handleSiteTypeChange={handleSiteTypeChange}
              />
              <TrailerLengthSelectField
                maxLength={maxLength}
                siteType={siteTypeSelected}
              />
            </div>
            <div className="flex justify-between mb-4">
              <MaxPeopleSelectField maxPeople={maxPeople} />
            </div>
            <div className="flex justify-between mb-12 items-center">
              <label className="font-Cabin text-sm lg:text-base text-white font-medium mb-3 sm:mb-0">
                Check In Date:
              </label>
              <DatePicker
                className="bg-transparent py-2.5 pl-2 w-fit relative text-white"
                id="frombox"
                type="text"
                name="from"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMM dd, yyyy"
              />
            </div>
            <div className="flex justify-between mb-12 items-center">
              <label className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
                Check Out Date:
              </label>
              <DatePicker
                className="bg-transparent py-2.5 pl-2 w-auto relative text-white"
                id="tobox"
                type="text"
                name="to"
                selected={checkOutDate}
                onChange={(date) => setCheckOutdate(date)}
                dateFormat="MMM dd, yyyy"
              />
            </div>
            <input type="hidden" name="landing" value="1" />
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
