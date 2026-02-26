
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  weatherAxios from "@/app/lib/axios/weatherAxios";

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk for fetching weather
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const { data } = await weatherAxios.get("weather", {
      params: { q: city },
    });
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default weatherSlice.reducer;