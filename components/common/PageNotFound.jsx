import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center   relative page_not_found">
        <div className="w-full   ">
          <div className="  text-center px-5">
            <Image
              src="/img/svg/errorImg.svg"
              width={592}
              height={350}
              alt="error"
              layout="intrinsic"
            />
            <h4 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center my-5 lg:my-7 ">
              Opps..Page Not Found!
            </h4>
            <Link href="/" passHref>
              <a className="bg-[#FFFFFF] py-[8px] px-[16px] lg:px-[28px] border-2 rounded-full  text-[#4E5F4C] font-bold  font-Bubblegum border-transparent ml-[16px] md:ml-[20px] text-sm lg:text-base hover:opacity-70 ease-in-out duration-200">
                Go To Home
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
