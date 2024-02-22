import { BuildableResource, Properties } from "tapi.js";

@Properties.Resource
export class WeatherForecast extends BuildableResource {
  @Properties.Alias("cnt")
  public count: number = 0;
  
  @Properties.ListOf<Forecasts>
  public forecasts: Array<Forecasts> = []
  constructor() {
    super();
  }
}

@Properties.Resource
class Forecasts extends BuildableResource {

  constructor() {
    super();
  }

}
