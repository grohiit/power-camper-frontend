import Image from 'next/image'
import React, { useState } from 'react'
import 'react-dropdown/style.css'
import { starData } from '../common/Content'
import DropDown from '../common/DropDown'
import { StarIcon, UploadIcon } from '../common/Icons'
import ReviewStars from '../common/ReviewStars'
import CampaignReviews from './CampaignReviews'

const CommentForm = ({ reviewdata }) => {
  const initialValues = {
    name: '',
    email: '',
    review: '',
  }
  const [formValue, setFormValue] = useState(initialValues)
  const submitHandler = (e) => {
    e.preventDefault()
    setFormValue(formValue)
  }
  const [indexvaluefirst, SetIndexValuefirst] = useState(null)
  const stars = [
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
    { starValue: <StarIcon />, starActive: 'star_active' },
  ]
  return (
    <>
      <section className="bg-[#3D4F3B] relative bg-fixed mt-16 lg:mt-20 xl:mt-28 form-section">
        <div className="topWaveImg">
          <Image
            className="w-full "
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664829160/Others/rivermap_top_wave_l0g3cj.png"
            alt="topWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>

        <div className="container mx-auto z-40 relative">
          <div className="  my-8 lg:my-14">
            <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center text-white mb-4">
              Overall Rating
            </h2>
            <div className="flex justify-center">
              {stars &&
                stars.map((value, index) => (
                  <ReviewStars
                    key={index}
                    value={value}
                    rating={4}
                    id={index}
                  />
                ))}
            </div>
          </div>
          <div className="lg:flex  w-full max-w-4xl mx-auto justify-center">
            <div className="    ">
              <div className="md:flex  my-8 w-full   form_dropdown">
                <div className=" ">
                  <p className="font-Cabin mb-3 ml-3    text-sm lg:text-base font-normal text-white">
                    Filter By
                  </p>
                  <div className="md:flex md:justify-between w-full">
                    <div className="    max-w-[222px] w-[222px]  ">
                      <DropDown
                        placeholder="Traveler Type"
                        options={['One', 'Second', 'Three']}
                      />
                    </div>
                    <div className="  mt-4 md:mt-0  md:ml-3 max-w-[222px] w-[222px] ">
                      <DropDown
                        placeholder="Traveler Frequency"
                        options={['One', 'Second', 'Three']}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:ml-20 mt-8 md:mt-0 ">
                  <p className="font-Cabin mb-3 ml-3    text-sm lg:text-base font-normal text-white">
                    Sort By
                  </p>
                  <div className="   max-w-[222px]   w-[222px]">
                    <DropDown
                      placeholder="Newest-default"
                      options={['One', 'Second', 'Three']}
                    />
                  </div>
                </div>
              </div>

              <CampaignReviews reviewdata={reviewdata} />

              <div className="flex  mt-10  px-3 text-center">
                <button
                  type="button"
                  className="bg-[#FFFFFF] py-[4px] px-[16px] md:px-[28px] border-2 rounded-full  text-[#4E5F4C] font-bold  font-Bubblegum border-transparent  text-sm lg:text-base hover:opacity-70 ease-in-out duration-75"
                >
                  Member
                </button>
                <button
                  type="button"
                  className="bg-transparent border-[#FFFFFF] border-2  py-[4px] px-[16px]  md:px-[28px] rounded-full  text-white font-bold  font-Bubblegum text-sm lg:text-base hover:opacity-70 ease-in-out duration-75 ml-[16px] lg:ml-[20px]"
                >
                  Helpful
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container mx-auto lg:pt-20  my-16 lg:my-20 "
          id="Contact"
        >
          <div className="  lg:py-14">
            <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center mb-5 md:mb-8 lg:mb-10 xl:mb-16 xxl:mb-20 text-white ">
              Your comment/rating/review;
            </h2>
            <form
              className="form_bg max-w-4xl    md:w-4/5 mx-auto"
              onSubmit={(e) => submitHandler(e)}
            >
              <div className="text-center flex justify-center flex-col items-center pt-8">
                <h4 className="text-sm md:text-base lg:text-xl font-bold font-Cabin text-white mb-3   ">
                  Your Rating
                </h4>
                <div className="flex justify-center">
                  {starData.map((val, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => SetIndexValuefirst(index)}
                        className={
                          indexvaluefirst === null
                            ? 'mr-1'
                            : indexvaluefirst >= index
                            ? 'star_active mr-1'
                            : ' mr-1'
                        }
                      >
                        {val.imageUrl}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div className="py-12">
                <div className="  flex justify-center flex-col items-center">
                  <input
                    className="form_bg text-white opacity-70 w-5/6 md:w-4/5 rounded-lg text-sm md:text-base lg:text-xl   font-Cabin py-4 px-6 md:px-8 lg:px-10 mb-4"
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={formValue.name}
                    onChange={(e) =>
                      setFormValue({
                        ...formValue,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                  <input
                    className="form_bg text-white opacity-70 w-5/6 md:w-4/5 rounded-lg text-sm md:text-base lg:text-xl   font-Cabin py-4 px-6 md:px-8 lg:px-10 mb-4"
                    type="text"
                    name="Name"
                    placeholder="Email"
                    value={formValue.email}
                    onChange={(e) =>
                      setFormValue({
                        ...formValue,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <textarea
                    rows="5"
                    className="form_bg text-white opacity-70 w-5/6 md:w-4/5 rounded-lg text-sm md:text-base lg:text-xl   font-Cabin py-4 px-6 md:px-8 lg:px-10 mb-4 resize-none"
                    type="text"
                    name="Name"
                    placeholder="Review"
                    value={formValue.review}
                    onChange={(e) =>
                      setFormValue({
                        ...formValue,
                        review: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
                <div className="w-5/6 md:w-4/5 mx-auto">
                  <p className="text-sm lg:text-base  font-Cabin  opacity-70 mb-4 md:mb-7 lg:mb-10 text-white">
                    Your email address will not be published. Required fields
                    marked
                  </p>
                  <div className="flex items-center">
                    <button
                      // type="button"
                      // onClick={(e) => e.preventDefault()}
                      className="bg-[#FFFFFF] py-[4px] px-[16px]   md:px-[28px] border-2 rounded-full  text-[#4E5F4C] font-normal  font-Bubblegum border-transparent  text-sm lg:text-base   hover:opacity-70 ease-in-out duration-75"
                    >
                      Post Review
                    </button>

                    <div>
                      <label
                        htmlFor="imageupload"
                        className="bg-transparent border-[#FFFFFF] border-2  py-[4px] px-[16px]   md:px-[28px] rounded-full  text-white font-normal  font-Bubblegum text-sm lg:text-base  ml-3 md:ml-[20px] cursor-pointer flex items-center justify-center hover:opacity-70 ease-in-out duration-75"
                      >
                        <span className="flex items-center">
                          <UploadIcon /> Choose file
                        </span>
                      </label>
                      <input
                        id="imageupload"
                        type="file"
                        hidden
                        multiple
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bottomWaveImg">
          <Image
            className="w-full "
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664829160/Others/rivermap_bottom_wave_vhh2lb.png"
            alt="bottomWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>
      </section>
    </>
  )
}

export default CommentForm
