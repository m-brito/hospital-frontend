import axios, { AxiosInstance } from "axios";
import { handleApiError } from "./utils/handleApiError";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST || "http://localhost:3001",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return handleApiError(error);
  }
);

export default axiosInstance;
