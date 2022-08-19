import Image from "next/image";
import React from "react";
import Activities from "./Activities";
import BasicAmenities from "./BasicAmenities";
import OtherAmenities from "./OtherAmenities";

const Amenities = ({ anim }) => {
  return (
    <>
      <section className="mt-20 lg:mt-28 relative ">
        <div className="absolute bottom-full right-0 hidden md:inline-block">
          <Image
            className="mb-12"
            src="/img/png/dots/green_right_side.png"
            alt="greenRightSideDot"
            width={164}
            height={270}
          />
        </div>
        <div className="absolute top-1/2 left-0 hidden md:inline-block">
          <Image
            className="mb-12"
            src="/img/png/dots/green_left_side.png"
            alt="greenLeftSideDot"
            width={164}
            height={270}
          />
        </div>
        <div className="container mx-auto relative z-50">
          <div className="lg:flex  content-center">
            <div className="lg:w-3/6 lg:pr-[25px] mb-20 lg:mb-0">
              <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4 text-center lg:text-start">
                Amenities
              </h2>
              <BasicAmenities anim={anim} />
              <OtherAmenities anim={anim} />
            </div>
            <Activities anim={anim} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;
