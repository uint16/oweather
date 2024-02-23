import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from "./weatherSlice";
import appReducer from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    weather: weatherReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch