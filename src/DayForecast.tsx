import * as React from "react";
import IntervalForecast from "./IntervalForecast";
import "./DayForecast.css";
import moment from "moment";

export interface DayForecastProps {
  intervalForecastItems: any[],
  date: string
}


const DayForecast: React.FC<DayForecastProps> = ({ date, intervalForecastItems }) => {


  return (
    <>
      <h3>{moment(date).format("dddd MMM Do YY")}</h3>
      { intervalForecastItems.map((intervalForecastItem) => {
        return <IntervalForecast intervalForecastItem={intervalForecastItem} />
      })
      }
    </>);
}

export default DayForecast;