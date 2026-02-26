import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import weatherReducer from "./weatherSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    weather: weatherReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;