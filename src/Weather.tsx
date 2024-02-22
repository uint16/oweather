import * as React from "react";
import { useWeatherData } from "./hooks/useWeatherData";

const Weather = () => {

  const data = useWeatherData("44.34", "10.99")
  return (<>
  {JSON.stringify(data.forecast)}
  </>  );
}
 
export default Weather;