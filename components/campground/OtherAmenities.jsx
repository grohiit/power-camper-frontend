import React, { useEffect, useState } from "react";
import { amenitiesSecondData } from "../common/Content";
import { CrossIcon } from "../common/Icons";

const OtherAmenities = ({ anim }) => {
  const { otherAmenities } = anim ? anim : {};
  const [filteredOtherAnimities, setFilteredOtherAnimities] = useState([]);

  useEffect(() => {
    for (let i = 0; i < amenitiesSecondData.length; i++) {
      const data = findMatch(otherAmenities, amenitiesSecondData[i]);
      if (data.length) {
        setFilteredOtherAnimities((prevState) => [...prevState, ...data]);
      }
    }
  }, [otherAmenities]);

  function findMatch(basicAmenities, amenitiesData) {
    const data = [];
    for (let j = 0; j < basicAmenities.length; j++) {
      if (
        basicAmenities[j].key.toLowerCase() ===
        amenitiesData.title.toLowerCase()
      ) {
        amenitiesData.isActive = basicAmenities[j].value;
        data.push(amenitiesData);
      }
    }
    return data;
  }

  return (
    <>
      <div className=" max-w-md   xl:w-9/12 grid grid-cols-4 gap-2 sm:gap-1 justify-center mx-auto lg:mx-0">
        {filteredOtherAnimities.map((val, index) => {
          return (
            <div
              className={`w-[64px] sm:w-[85px] py-2 sm:py-3 border-[#CBDED3] border text-center box_shadow_amemties flex flex-col justify-around items-center sm:mb-5  ${
                val.isActive ? "" : "is_unaivable"
              }`}
              key={index}
            >
              <span className="relative ">
                <span className="svg_icon amenities_icon">{val.icon}</span>
                <span className="absolute   cross_icon opacity-0">
                  <CrossIcon />
                </span>
              </span>
              <p className="mb-0 mt-3 lg:mt-5 font-Cabin capitalize text-xs md:text-sm font-bold   text-[#3D4F3B]  ">
                {val.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OtherAmenities;
