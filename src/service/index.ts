import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
  });

  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('ng-token');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  
    return config;
  });

  export default axiosInstance