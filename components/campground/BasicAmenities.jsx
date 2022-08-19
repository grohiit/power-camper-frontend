import React, { useEffect, useState } from "react";
import { amenitiesData } from "../common/Content";
import { CrossIcon } from "../common/Icons";

const BasicAmenities = ({ anim }) => {
  const { basicAmenities } = anim ? anim : {};
  const [filterBasicAnimitiesData, setFilterBasicAnimitiesData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < amenitiesData.length; i++) {
      const data = findMatch(basicAmenities, amenitiesData[i]);
      if (data.length) {
        setFilterBasicAnimitiesData((prevState) => [...prevState, ...data]);
      }
    }
  }, [basicAmenities]);

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
      <div className="max-w-md   xl:w-9/12 grid grid-cols-3 gap-4 sm:gap-1 justify-center mb-4 sm:mb-0 mx-auto lg:mx-0 ">
        {filterBasicAnimitiesData.map((val, index) => (
          <div
            className={`w-24 sm:w-[128px]  py-4 sm:py-5 border-[#CBDED3] border text-center box_shadow_amemties flex flex-col justify-around items-center   sm:mb-5  ${
              val.isActive ? "" : "is_unaivable"
            }`}
            key={index}
          >
            <span className="relative ">
              <span className="svg_icon amenities_icon">{val.icon}</span>
              <span className="absolute  cross_icon opacity-0">
                <CrossIcon />
              </span>
            </span>
            <p className="mb-0 mt-3 lg:mt-5 font-Cabin capitalize  text-sm lg:text-base  font-bold text-[#3D4F3B] ">
              {val.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BasicAmenities;
