import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import weatherData from "../mock/weather_data.json";

export const useWeatherData = (latitude: string, longitude: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["forecast", latitude, longitude],
    queryFn:  () => {
      return weatherData;
    }
  });

  return {
    forecast: data || [],
    isLoading,
    isError,
    isSuccess
  }
}