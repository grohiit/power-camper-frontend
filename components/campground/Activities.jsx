import React, { useEffect, useState } from "react";
import { activitiesData } from "../common/Content";

const Activities = ({ anim }) => {
  const { campgroundRules, activities } = anim ? anim : {};

  const [filteredActivities, setFilterActivities] = useState([]);
  useEffect(() => {
    for (let i = 0; i < activitiesData.length; i++) {
      activitiesData[i].title = activities[i];
      setFilterActivities((prevState) => [...prevState, activitiesData[i]]);
    }
  }, [activities]);
  return (
    <>
      <div className="lg:w-3/6 lg:pl-[25px]">
        <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4">
          Activities
        </h2>
        <div className="mb-6 lg:mb-0">
          <div className="river_main_box  py-[6px] px-[8px] mb-[20px] lg:mb-[30px]">
            <div className="river_middle_box pt-[18px] lg:pt-6 pb-[14px] px-[14px] lg:px-[16px]">
              {activitiesData.map((val, index) => {
                return (
                  <div
                    className="river_small_box py-[10px] px-[16px] lg:px-6 flex  mb-2"
                    key={index}
                  >
                    <span className="mr-[16px] lg:mr-[33px]">{val.icon}</span>
                    <h4 className="font-Cabin mb-0 text-sm lg:text-base  capitalize   text-white  ">
                      {val.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
