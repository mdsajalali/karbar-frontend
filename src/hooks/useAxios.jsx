import axios from "axios";

const instance = axios.create({
    baseURL: "https://karbar-shop.vercel.app",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
