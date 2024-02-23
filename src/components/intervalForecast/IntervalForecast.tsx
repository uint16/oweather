import * as React from "react";
import "./IntervalForecast.css"
import { getLocalTime, getTemperatureInUnit } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { OPEN_WEATHER_ICON_BASE_URL } from "../../utils/constants";

export interface ForecastItemProps {
  intervalForecastItem: any,
}

const IntervalForecast: React.FC<ForecastItemProps> = ({ intervalForecastItem,  }) => {

  const temperatureUnit = useSelector((state: RootState) => state.app.unit);
  const timezoneOffset = useSelector((state: RootState) => state.weather.timezoneOffset)

  return (
    <div className="weather-forecast-container" >
      <div >
      <span className="weather-forecast-description-time">{getLocalTime(intervalForecastItem.dt, timezoneOffset)}</span>
        <div className="weather-forecast-main">
          <h4>{getTemperatureInUnit(intervalForecastItem.main.temp, temperatureUnit)}</h4>
          <img alt="Weather icon" src={`${OPEN_WEATHER_ICON_BASE_URL}/${intervalForecastItem.weather[0].icon}@2x.png`} />
          <span className="weather-forecast-description-details">{intervalForecastItem.weather[0].description}</span>
        </div>
        <div className="weather-forecast-description-container">
          <span className="weather-forecast-description-temp">Max: {getTemperatureInUnit(intervalForecastItem.main.temp_max, temperatureUnit)}</span>
          <span className="weather-forecast-description-temp">Min: {getTemperatureInUnit(intervalForecastItem.main.temp_min, temperatureUnit)}</span>
          <span className="weather-forecast-description-temp">Real Feel: {getTemperatureInUnit(intervalForecastItem.main.feels_like, temperatureUnit)}</span>
        </div>
        {/* <div className="forecast-summary-container ">
        <div className="side-summary">
          <span>Wind Speed: </span>
          <span>Wind Direction: </span>
          <span>Wind Gusts: </span>
          <span>Probability of Precipitation: </span>
          <span>Propability of Thunderstorms:</span>
          <span></span>
        </div>
        <div className="side-summary">
          <span>Rain:</span>
          <span>Cloud Cover:</span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      </div>
    </div>);
}

export default IntervalForecast;