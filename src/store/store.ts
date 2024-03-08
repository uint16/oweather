import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from "./weatherSlice";
import appReducer from "./appSlice";

const rootReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']