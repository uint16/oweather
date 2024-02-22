import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useWeatherData = (latitude: string, longitude: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["forecast", latitude, longitude],
    queryFn: async () => {
      return await axios.get("OPEN_WEATHER_ENDPOINT");
    }
  });

  return {
    forecast: data?.data || [],
    isLoading,
    isError,
    isSuccess
  }
}