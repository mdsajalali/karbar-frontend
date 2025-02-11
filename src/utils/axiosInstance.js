import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://karbar-api.vercel.app",

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
