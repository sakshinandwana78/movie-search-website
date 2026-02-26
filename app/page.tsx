"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/store/movieSlice";
import { RootState, AppDispatch } from "@/store/store";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies("avengers")); // 👈 DEFAULT LOAD 
  }, [dispatch]);

  if (loading) return <p className="text-white p-8">Loading...</p>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
            <div className="bg-gray-800 p-4 rounded">
              <img src={movie.Poster} alt={movie.Title} />
              <h3 className="text-white mt-2">{movie.Title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
