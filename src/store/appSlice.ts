import { createSlice } from "@reduxjs/toolkit";

interface appState {
  unit: string,
  count: number,
  language: string
}

const initialAppState: appState = {
  unit: "metric",
  count: 40,
  language: "en"
}

export const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    changeUnit: (state) => {

    },
    changeCount: (state) => {

    },
    changeLanguage: (state) => {

    }
  }
})

export const { changeCount, changeUnit, changeLanguage } = appSlice.actions;
export default appSlice.reducer;