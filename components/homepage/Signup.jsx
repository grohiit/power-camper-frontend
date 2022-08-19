import React from "react";

const Signup = () => {
  return (
    <>
      <div className=" pt-12 pb-20 md:pt-[60px] md:pb-[50px] " id="contact">
        <div className="container px-2 md:container md:px-4 md:mx-auto">
          <div className="max-w-xxl  mx-auto ">
            <h3 className=" text-[24px] md:text-[34px] font-bold font-Balsamiq text-center">
              Not Ready?
            </h3>
            <h3 className=" text-[24px] md:text-[34px]  font-Balsamiq font-bold text-center">
              Sign up for exclusive deals!
            </h3>
            <div className="py-1 pr-1 pl-2  max-w-xs sm:max-w-[410px] mx-auto  mt-11 border rounded-md flex justify-between border-[#D9D9D9] border-solid">
              <input
                type="email"
                placeholder="Email"
                className="focus:outline-none  px-1 sm:px-4 font-Balsamiq font-bold w-full "
              />
              <button className="text-white text-center font-Balsamiq font-bold text-base  border  rounded-md  border-[#243C5A] border-solid bg-[#3F503B]  px-4 sm:px-6 py-[9px] hover:border hover:border-solid hover:border-[#243C5A] hover:text-[#3F503B] hover:bg-transparent  leading-[16px]  ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
