import moment from "moment"
import { TemperatureUnit } from "./types";
const KELVIN_CONSTANT = 272.15;
const FAHRENHEIT_CONSTANT = 32;

export const unixTimetoDate = (unixTime: number, timezoneOffset: number) => {  
  return  moment.unix(unixTime).utc().utcOffset(timezoneOffset/60);
}

export const getDayHighTemperature = () => {

}

export const getDayLowTemperature = () => {
  
}

const kelvinToCelcius = (value: number) => {
  return Math.round(value - KELVIN_CONSTANT);
}

const kelvinToFahrenheit = (value: number) => {
  return Math.round((value - KELVIN_CONSTANT) * 9/5) + FAHRENHEIT_CONSTANT;
}

export const getLocalDateTime = (unixTime: number, timezoneOffset: number) => {
  return unixTimetoDate(unixTime, timezoneOffset).format("LLL")
}

export const getLocalDate = (unixTime: number, timezoneOffset: number) => {
  return unixTimetoDate(unixTime, timezoneOffset).format("LL")
}

export const getLocalTime = (unixTime: number, timezoneOffset: number) => {
  return unixTimetoDate(unixTime, timezoneOffset).format("LT")
}

export const getTemperatureInUnit = (value: number, unit: TemperatureUnit) => {
  switch(unit) {
    case TemperatureUnit.CELCIUS:
      const celiusFormatter = new Intl.NumberFormat(moment.locale(), {
        style: "unit",
        unit: "celsius",
      })
      return celiusFormatter.format(kelvinToCelcius(value));
    case TemperatureUnit.FAHRENHEIT:
      const fahrenheitFormatter = new Intl.NumberFormat(moment.locale(), {
        style: "unit",
        unit: "fahrenheit",
      })
      return fahrenheitFormatter.format(kelvinToFahrenheit(value));
    // case TemperatureUnit.KELVIN:
    //   const kelvinFormatter = new Intl.NumberFormat(moment.locale(), {
    //     style: "unit",
    //     unit: "temperature-kelvin",
    //   })
    //   return kelvinFormatter.format(value);
  }
}




