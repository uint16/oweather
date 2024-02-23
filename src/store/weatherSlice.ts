import { createSlice } from "@reduxjs/toolkit";

export interface weatherState {
  data: {}
}

const initialState: weatherState = {
  data: {}
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    refreshData: (state) => {

    },
    clearData: (state) => {

    }
  }
})

export const { refreshData, clearData } = weatherSlice.actions;
export default weatherSlice.reducer;