import axios from "axios";
import { OMDB_BASE_URL, WEATHER_BASE_URL } from "@/app/constants/apiUrls";

const axiosInstance = axios.create({
  baseURL: OMDB_BASE_URL,
  params: {
    apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
  },
});
export const weatherAxios = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY, // .env me rakho
    units: "metric", // Celsius me results
  },
});

export default { axiosInstance, weatherAxios };
