import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemperatureUnit } from "../utils/types";

interface appState {
  unit: TemperatureUnit,
  count: number,
  language: string
  selectedCity: {
    lat: number,
    lon: number
  }
}

const initialAppState: appState = {
  unit: TemperatureUnit.CELCIUS,
  count: 40,
  language: "en",
  selectedCity: {
    lat: 0,
    lon: 0
  }
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
    setCity: (state, action: PayloadAction<string>) => {
      const coord = action.payload.split(" ");
      return {
        ...state,
        selectedCity: {
          lat: Number(coord[0]),
          lon: Number(coord[1])
        }
      }
    }
  }
})

export const { setCity, changeUnit } = appSlice.actions;
export default appSlice.reducer;