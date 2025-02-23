// src/api/axios.js
import axios from 'axios';
const baseURL: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const axiosInstance = axios.create({
  baseURL: baseURL, // Replace with your API base URL
});

export default axiosInstance;