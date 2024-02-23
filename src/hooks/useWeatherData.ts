import { OPEN_WEATHER_DATA_BASE_URL } from './../utils/constants';
import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { WeatherData, WeatherResponse } from "../utils/types";

export const useWeatherData = (latitude: string, longitude: string) => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["forecast", latitude, longitude],
    queryFn: async () => {
      return (await axios.get(`${OPEN_WEATHER_DATA_BASE_URL}?lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}`)).data as WeatherResponse;
    },
    select: (data: WeatherResponse) => {
      const weatherData: WeatherData = {
        cityName: data.city.name,
        sunset: data.city.sunset,
        sunrise: data.city.sunrise,
        timezoneOffset: data.city.timezone,
        forecasts: data.list,
        lat: data.city.coord.lat,
        lon: data.city.coord.lon,
        count: data.cnt,
      }

      return weatherData;
    },
  });

  return {
    forecast: data,
    isLoading,
    isError,
    error,
    isSuccess
  }
}