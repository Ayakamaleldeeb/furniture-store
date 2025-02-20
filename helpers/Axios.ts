// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://aura.runasp.net', // Replace with your API base URL
});

export default axiosInstance;