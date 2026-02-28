import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAxios from "@/app/lib/axios/movieAxios";

//  Redux thunk 
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchQuery: string) => {
    const response = await movieAxios.get("/", {
      params: {
        s: searchQuery, // sirf search bhej rahe hain
      },
    });

    return response.data.Search || [];
  }
);

interface MovieState {
  movies: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "API Error";
      });
  },
});

export default movieSlice.reducer;
