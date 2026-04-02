import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Axios API Client
 *
 * Centralized HTTP client with interceptors for:
 * - Base URL configuration
 * - Auth token injection
 * - Response error handling
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ============================
// Request Interceptor
// ============================
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Attach auth token if available
    const token = localStorage.getItem('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ============================
// Response Interceptor
// ============================
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 401:
          // Handle unauthorized - redirect to login
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
          break;
        case 403:
          console.error('Forbidden: You do not have access.');
          break;
        case 500:
          console.error('Server error. Please try again later.');
          break;
        default:
          console.error(`API Error: ${status}`);
      }
    } else if (error.request) {
      console.error('Network error. Please check your connection.');
    }

    return Promise.reject(error);
  }
);

export default apiClient;
