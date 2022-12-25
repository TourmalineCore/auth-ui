import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { authService } from './authService';

const createAPI = (): AxiosInstance => {
  const apiConfig = axios.create({
    baseURL: 'https://localhost:7104/auth/',
  });

  apiConfig.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = authService.getAuthToken();

      if (config.headers) {
        // eslint-disable-next-line max-len
        config.headers.Authorization = token ? `Bearer ${token}` : '';
      }

      return config;
    },
  );

  return apiConfig;
};

export const api = createAPI();
