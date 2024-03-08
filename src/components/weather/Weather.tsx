import * as React from "react";
import { useWeatherData } from "../../hooks/useWeatherData";
import "./Weather.css"
import { getLocalDate, getLocalDateTime } from "../../utils/helpers";
import { groupBy } from "lodash";
import DayForecast from "../dayForecast/DayForecast";
import { useDispatch, useSelector } from "react-redux";
import { clearData, refreshData } from "../../store/weatherSlice";
import { RootState } from "../../store/store";
import { useEffect } from "react";


const Weather = (props: {lat: number, lon: number}) => {
  const dispatch = useDispatch()
  const { weatherData, isLoading, isError, isSuccess, error } = useWeatherData(props.lat, props.lon);
  const { sunrise, sunset, forecasts, cityName, timezoneOffset} = useSelector((state: RootState) => state.weather)
  

  useEffect(() => {
    if(isSuccess && weatherData){
      dispatch(clearData())
      dispatch(refreshData(weatherData))
    }

  }, [isLoading, isSuccess, weatherData])

  if (isError) {
    return <p>Error fetching weather data... {error?.message}</p>;
  }

  return (
    <div className="weather">
      {isLoading && <h3>Loading ...</h3>}
      {isSuccess && forecasts.length && (
        <>
          <h3>{cityName}</h3>
          <span>Sunrise: {getLocalDateTime(sunrise, timezoneOffset)}</span>
          <span>Sunset: {getLocalDateTime(sunset, timezoneOffset)}</span>

          <h2>5 days forecast (3hrs intervals)</h2>
          {Object.entries(
            groupBy(
              forecasts, (fcast) => {
                return getLocalDate(fcast.dt, timezoneOffset);
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