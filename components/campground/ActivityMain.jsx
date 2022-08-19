import React, { useState, useEffect } from "react";
import { activitiesData } from "../common/Content";
import CampGroundRules from "./CampGroundRules";
import CampGroundCost from "./CampGroundCost";

const ActivityMain = ({ data }) => {
  const { campgroundRules, activities, campgroundCost } = data ? data : {};
  const [filteredActivities, setFilterActivities] = useState([]);
  useEffect(() => {
    for (let i = 0; i < activitiesData.length; i++) {
      activitiesData[i].title = activities[i];
      setFilterActivities((prevState) => [...prevState, activitiesData[i]]);
    }
  }, [activities]);

  return (
    <>
      <section className="mt-20 lg:mt-28  ">
        <div className="container mx-auto">
          <div className="lg:flex content-center">
            <CampGroundRules campgroundRules={campgroundRules} />
            <CampGroundCost campgroundCost={campgroundCost} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityMain;
