import axios from 'axios';

const API_HOST = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io';

const api = axios.create({
  baseURL: API_HOST,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error);
    if (error.config && error.config.url) {
      console.error('Failed API Call URL:', error.config.url);
    }
    return Promise.reject(error);
  },
);

export default api;
