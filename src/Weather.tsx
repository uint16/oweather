import * as React from "react";
import { useWeatherData } from "./hooks/useWeatherData";
import "./Weather.css"
import { unixTimetoDate } from "./utils/helpers";
import IntervalForecast from "./IntervalForecast";
import { groupBy } from "lodash";
import DayForecast from "./DayForecast";

const Weather = () => {

  const { forecast } = useWeatherData("44.34", "10.99");

  if (!forecast) {
    return null;
  }

  return (
    <div className="weather">
      <h3>{forecast.city.name}</h3>
      <span>Sunrise: {`${unixTimetoDate(forecast.city.sunrise, forecast.city.country)}`}</span>
      <span>Sunset: {`${unixTimetoDate(forecast.city.sunset, forecast.city.country)}`}</span>

      <h4>5 days forecast (3hrs intervals)</h4>
      {Object.entries(
        groupBy(
          forecast.list, (fcast) => {
            return unixTimetoDate(fcast.dt, "").toDateString();
          }
        )).map(([key, value]) => {
        return (
          <DayForecast date={key} intervalForecastItems={value} />
        )
      })}
    </div>
  );
}

export default Weather;