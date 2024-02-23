import * as React from "react";
import IntervalForecast from "../intervalForecast/IntervalForecast";
import "./DayForecast.css";
import moment from "moment";

export interface DayForecastProps {
  intervalForecastItems: any[],
  date: string
}


const DayForecast: React.FC<DayForecastProps> = ({ date, intervalForecastItems }) => {

  return (
    <>
      <h3>{moment(date).format("LL")}</h3>
      { intervalForecastItems.map((intervalForecastItem) => {
        return <IntervalForecast intervalForecastItem={intervalForecastItem} />
      })
      }
    </>);
}

export default DayForecast;