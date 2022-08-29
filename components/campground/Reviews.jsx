import React from 'react'

const Reviews = ({ name }) => {
  return (
    <>
      <section className="mt-8 lg:mt-12 xl:mt-16">
        <div className="container mx-auto my-7">
          <div>
            <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center mb-5 md:mb-8 lg:mb-10 xl:mb-16 xxl:mb-20  max-w-lg mx-auto">
              {name} Campground Reviews
            </h2>
            <div className="flex   items-center justify-center text-center  ">
              <a
                href="#Contact"
                className="bg-[#5D6D5B] py-[8px] px-[16px] md:px-[28px] border-2 rounded-full  text-white font-normal  font-Bubblegum border-transparent  text-sm lg:text-base hover:opacity-70 ease-in-out duration-75 "
              >
                Write a Review
              </a>
              <button
                type="button"
                className="bg-transparent border-[#5D6D5B] border-2  py-[8px] px-[16px] md:px-[28px] rounded-full  text-[#5D6D5B] font-normal  font-Bubblegum text-sm lg:text-base hover:opacity-70 ease-in-out duration-75  ml-[16px] md:ml-[20px] "
              >
                Upload Photos/videos
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
