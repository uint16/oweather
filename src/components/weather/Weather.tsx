import * as React from "react";
import { useWeatherData } from "../../hooks/useWeatherData";
import "./Weather.css"
import { getLocalDate, getLocalDateTime, unixTimetoDate } from "../../utils/helpers";
import { groupBy } from "lodash";
import DayForecast from "../dayForecast/DayForecast";
import { useDispatch } from "react-redux";
import { refreshData } from "../../store/weatherSlice";
import UnitSelector from "../selectors/UnitSelector";
import SearchLocation from "../searchLocation/SearchLocation";

const Weather = () => {
  const dispatch = useDispatch()
  const { forecast, isLoading, isError, isSuccess, error } = useWeatherData("44.34", "10.99");
  

  if(isSuccess && forecast) {
    dispatch(refreshData(forecast))
  }

  if (isError) {
    return <p>Error fetching weather data... {error?.message}</p>;
  }

  return (
    <div className="weather">
      {isLoading && <h3>Loading ...</h3>}
      {isSuccess && forecast && (
        <>
          <UnitSelector/>
          <SearchLocation/>
          <h3>{forecast.cityName}</h3>
          <span>Sunrise: {getLocalDateTime(forecast.sunrise, forecast.timezoneOffset)}</span>
          <span>Sunset: {getLocalDateTime(forecast.sunset, forecast.timezoneOffset)}</span>

          <h2>5 days forecast (3hrs intervals)</h2>
          {Object.entries(
            groupBy(
              forecast.forecasts, (fcast) => {
                return getLocalDate(fcast.dt, forecast.timezoneOffset);
              }
            )).map(([key, value]) => {
              return (
                <DayForecast date={key} intervalForecastItems={value} />
              )
            })}
        </>)}
    </div>
  );
}

export default Weather;