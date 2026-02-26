"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "@/store/weatherSlice";
import type { RootState } from "@/store/store";

export default function WeatherPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    dispatch(fetchWeather(city) as any);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-start justify-center bg-gray-100 pt-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          🌦 Weather Checker
        </h1>

        {/* Search box */}
        <div className="flex gap-2 mb-6">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* States */}
        {loading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {/* Weather Card */}
        {data && (
          <div className="mt-6 text-center bg-blue-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold">{data.name}</h2>
            <p className="text-4xl font-bold my-2">
              {Math.round(data.main.temp)}°C
            </p>
            <p className="capitalize text-gray-600">
              {data.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
