interface WeatherSummary {
  id: number,
  main: string,
  description: string,
  icon: string
}

interface WeatherDetails {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  sea_level: number,
  grnd_level: number,
  humidity: number,
  temp_kf: number
}

interface Wind {
  speed: number,
  deg: number,
  gust: number
}

interface Cloud {
  all: number
}

export interface IntervalForecast {
  dt: number,
  main: WeatherDetails,
  weather: WeatherSummary[],
  clouds: Cloud,
  wind: Wind,
  visibility: number,
  pop: number,
  rain: {
    "3h": 0.12
  },
  sys: {
    pod: string
  },
  dt_txt: Date

}

export interface City {
  id: number,
  name: string,
  coord: {
    lat: number,
    lon: number
  },
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number
}

export interface WeatherResponse {
  cnt: number,
  list: IntervalForecast[]
  city: City
}
