import React, { useState, useEffect } from "react";
import WeatherBoxCard from "./WeatherBoxCard";

const Weather = ({ data }) => {
  // const  {lat,lon} = data;
  const lat = "44.715419";
  const lon = "-86.119273";

  const [weather, setWeather] = useState([]);
  const APIKEY = "242d7c26ea43ec06c5ea05ccedb1ac58";
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
  useEffect(() => {
    async function getData() {
      try {
        const weatherfetch = await fetch(WEATHER_API);
        const weatherApiData = await weatherfetch.json();
        let latitude = weatherApiData.coord.lat;
        let longitude = weatherApiData.coord.lon;
        getDatafor7days(latitude, longitude);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [WEATHER_API]);

  const getDatafor7days = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data) {
        const splicedarray = data.daily.slice(0, 7);
        setWeather(splicedarray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="mt-20 lg:mt-28">
        <div className="container mx-auto relative z-40">
          <div className="mb-5 md:mb-8 lg:mb-10 xl:mb-16 xxl:mb-20 text-center">
            <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center mb-6">
              Weather
            </h2>
          </div>
          <div className="flex flex-wrap  justify-center xl:justify-evenly sm:px-6">
            {weather &&
              weather.length > 0 &&
              weather.map((obj, index) => (
                <WeatherBoxCard key={index} obj={obj} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
