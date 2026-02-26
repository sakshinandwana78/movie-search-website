import axios from "axios";
import { OMDB_BASE_URL} from "@/app/constants/apiUrls";

const movieAxios = axios.create({
  baseURL: OMDB_BASE_URL,
  params: {
    apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
  },
});
export default movieAxios;