import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { OPEN_WEATHER_DATA_GEOPOINT_URL } from "../utils/constants";

export const useLocation = () => {

  const [query, setQuery] = useState("");
  const onQueryChange = useCallback((event: any) => {
    const value = event.target.value
    setQuery(value);
  }, [])

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["location search", query],
    queryFn: async () => {
      return query === "" ? undefined :
       await axios.get(`${OPEN_WEATHER_DATA_GEOPOINT_URL}?q=${query}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
    },
  });

  return {
    onQueryChange,
    locations: data?.data as any[],
    isLoading,
    isError,
    error,
    isSuccess
  }
}