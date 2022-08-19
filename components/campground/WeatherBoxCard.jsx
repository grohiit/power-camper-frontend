import React from "react";
import { convertKelvinToCelsius, getDayName } from "../common/Functions";
import {
  SunWithCloudIcon,
  RainCloudIcon,
  SunWeatherIcon,
} from "../common/Icons";

const WeatherBoxCard = ({ obj }) => {
  return (
    <>
      <div className="w-[104px] xl:w-[128px] weather_box mx-1 sm:mx-2 py-3 sm:py-4 px-3 sm:px-6 mb-6 lg:mb-8">
        <div className="text-center justify-center flex flex-col">
          <div className="flex items-center justify-center mb-4 h-12">
            <span className="text-center inline-block">
              {obj.weather[0].main === "Clouds" && <SunWithCloudIcon />}
              {obj.weather[0].main === "Clear" && <SunWeatherIcon />}
              {obj.weather[0].main === "Rain" && <RainCloudIcon />}
            </span>
          </div>
          <h5 className="text-[#3D4F3B]  text-sm md:text-base lg:text-xl font-bold font-Cabin">
            {obj.title}
          </h5>
          <p className="text-sm lg:text-base opacity-70 text-center ">
            {getDayName(obj.dt)}
          </p>
          <p className="text-sm lg:text-base mb-0">
            {convertKelvinToCelsius(obj.temp.day)}°C
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherBoxCard;
