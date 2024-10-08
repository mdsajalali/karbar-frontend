import axios from "axios";

const instance = axios.create({
  baseURL: "https://karbar-shop.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
