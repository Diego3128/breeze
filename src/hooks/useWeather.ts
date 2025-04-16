import axios from "axios";
import { Search } from "../types";
import { object, string, number, InferOutput, safeParse } from "valibot";
import { useState } from "react";

const WeatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    feels_like: number(),
    temp_min: number(),
    temp_max: number(),
    humidity: number(),
    sea_level: number(),
  }),
});

export type WeatherInfo = InferOutput<typeof WeatherSchema>;

const weatherDefaultValue = {
  name: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    sea_level: 0,
  },
};

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherInfo>(weatherDefaultValue);
  const [hasWeatherData, setHasWeatherData] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const fetchWeather = async (search: Search) => {
    setIsLoading(true);
    setHasWeatherData(false);
    setWeather(weatherDefaultValue);
    try {
      const APIKEY = import.meta.env.VITE_API_KEY;
      const GEOURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${APIKEY}`;
      const response = await axios.get(GEOURL);
      const { data } = response;
      if (!data[0]) {
        // city not found
        setNotFound(true);
        return;
      }
      // city exists - make next request
      const latitude = data[0].lat;
      const longitude = data[0].lon;
      const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
      // using valibot
      const { data: weatherData } = await axios.get(WEATHER_URL);

      const weatherResult = safeParse(WeatherSchema, weatherData);
      if (weatherResult.success) {
        setWeather(weatherResult.output);
        setHasWeatherData(true);
        setNotFound(false);
      }
    } catch (e) {
      // set notFound when there is no service
      setNotFound(true);
      // console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchWeather,
    weather,
    hasWeatherData,
    isLoading,
    notFound,
  };
};
