import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemperatureUnit } from "../utils/types";

interface appState {
  unit: TemperatureUnit,
  count: number,
  language: string
  selectedCity?: {
    lat: number,
    lon: number
  }
}

const initialAppState: appState = {
  unit: TemperatureUnit.CELCIUS,
  count: 40,
  language: "en",
  selectedCity: undefined
}

export const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    changeUnit: (state, action: PayloadAction<TemperatureUnit>) => {
      return {
        ...state,
        unit: action.payload
      }
    },
    setCity: (state, action: PayloadAction<{lat: number, lon: number}>) => {
      
      return {
        ...state,
        selectedCity: {
          lat: action.payload.lat,
          lon: action.payload.lon
        }
      }
    }
  }
})

export const { setCity, changeUnit } = appSlice.actions;
export default appSlice.reducer;