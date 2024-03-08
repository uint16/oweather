import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../utils/types";

const initialState: WeatherData  = {
  cityName: "",
  sunset: -1,
  sunrise: -1,
  timezoneOffset: -1,
  forecasts: [],
  lat: 0,
  lon: 0,
  count: 0
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    refreshData: (state, action: PayloadAction<WeatherData>) => {
      return {
        ...action.payload,
      }
    },
    clearData: (state) => {
      return initialState
    }
  }
})

export const { refreshData, clearData } = weatherSlice.actions;
export default weatherSlice.reducer;