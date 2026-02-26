"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/store/movieSlice";

export default function SearchPage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  // ✅ YAHI SAHI TAREEKA HAI
  const searchQuery = searchParams.get("q") || "";

  const { movies, loading, error } = useSelector(
    (state: any) => state.movies
  );

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchMovies(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">
        🔍 Results for "{searchQuery}"
      </h2>

      {loading && <p className="text-yellow-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movie: any) => (
          <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
            <div className="bg-gray-800 p-3 rounded-xl">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="rounded mb-2"
              />
              <h3 className="text-white font-bold">{movie.Title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
