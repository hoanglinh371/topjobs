import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://topjob-api.onrender.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosClient.interceptors.response.use((response) => response);

export default axiosClient;
