import * as React from "react";
import "./IntervalForecast.css"
import { unixTimetoDate } from "./utils/helpers";
import moment from "moment";

export interface ForecastItemProps {
  intervalForecastItem: any,
}
const IntervalForecast: React.FC<ForecastItemProps> = ({ intervalForecastItem }) => {

  return (
    <div className="weather-forecast-container" >
      <div >
      <span className="weather-forecast-description-time">{moment(unixTimetoDate(intervalForecastItem.dt, "")).format("LT")}</span>
        <div className="weather-forecast-main">
          <h4>{intervalForecastItem.main.temp}</h4>
          <img src={`http://openweathermap.org/img/wn/${intervalForecastItem.weather[0].icon}@2x.png`} />
          <span className="weather-forecast-description-details">{intervalForecastItem.weather[0].description}</span>
        </div>
        <div className="weather-forecast-description-container">
          <span className="weather-forecast-description-real-feel">Max: {intervalForecastItem.main.temp_max}</span>
          <span className="weather-forecast-description-real-feel">Min: {intervalForecastItem.main.temp_min}</span>
          <span className="weather-forecast-description-real-feel">Real Feel: {intervalForecastItem.main.feels_like}</span>
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