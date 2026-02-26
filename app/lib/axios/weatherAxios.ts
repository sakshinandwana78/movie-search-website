import axios from "axios";
import { WEATHER_BASE_URL } from "@/app/constants/apiUrls"; 

const weatherAxios = axios.create({
  baseURL: WEATHER_BASE_URL,
   params: {
    appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY, // .env me rakho
    units: "metric", // Celsius me results
  },
});

export default weatherAxios;