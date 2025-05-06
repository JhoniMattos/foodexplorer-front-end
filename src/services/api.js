import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-8ag2.onrender.com"
});