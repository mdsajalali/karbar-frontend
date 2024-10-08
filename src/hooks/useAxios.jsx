import axios from "axios";

const instance = axios.create({
  baseURL: "https://karbar-api.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
