import type { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "./index";

/**
 * Response interceptor to handle successful responses
 */
export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

/**
 * Response error interceptor to handle errors, token refresh, and redirects
 */
export const responseErrorInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config as any;

  // Handle 401 Unauthorized - Token Refresh Logic
  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        // No refresh token, redirect to login
        handleAuthError();
        return Promise.reject(error);
      }

      // Call refresh token endpoint
      const response = await axiosInstance.post("/auth/refresh", {
        refreshToken,
      });

      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      // Retry original request with new token
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      // Refresh failed, clear tokens and redirect
      handleAuthError();
      return Promise.reject(refreshError);
    }
  }

  // Handle 403 Forbidden
  if (error.response?.status === 403) {
    console.error("Forbidden: Insufficient permissions");
    // Optionally redirect to unauthorized page
  }

  // Handle 404 Not Found
  if (error.response?.status === 404) {
    console.error("Resource not found");
  }

  // Handle 500 Server Error
  if (error.response?.status === 500) {
    console.error("Server error occurred");
  }

  return Promise.reject(error);
};

/**
 * Handle authentication errors - clear tokens and redirect to login
 */
const handleAuthError = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  // Redirect to login (adjust path as needed)
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
};
