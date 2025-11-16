// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1", // your backend base URL
  withCredentials: true,                   // ✅ important for cookies/CORS
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
