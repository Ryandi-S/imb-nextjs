import storage from "@/utils/storage";
import { StorageKeys } from "@/utils/storage/types";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * Define the api config
 * @returns The api config
 */
const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

/**
 * Define the cached token
 * @returns The cached token
 */
let cachedToken: string | null = null;

/**
 * Set the cached token
 * @param token - The token to set
 */
export const setCachedToken = (token: string | null) => {
  cachedToken = token;
};

/**
 * Get the access token
 * @returns The access token
 */
export const getAccessToken = async (): Promise<string | null> => {
  if (cachedToken) return cachedToken;

  const rawToken = storage.getDataFromLocalStorage(StorageKeys.USER_TOKEN) as
    | string
    | null;
  const token = rawToken ? JSON.parse(rawToken) : null;
  cachedToken = token ?? null;
  return cachedToken;
};

/**
 * Define the apiClient
 * @returns The apiClient
 */
const apiClient: AxiosInstance = axios.create(apiConfig);

// Request Interceptor
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.log("Request Interceptor Error: ", JSON.stringify(error, null, 2));
    return Promise.reject(error);
  }
);

// Response Interceptor:
// You can handle responses globally here
// e.g., handle common error codes or refresh tokens
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const status = error.response?.status;
    const respData = error.response?.data;
    const respError = respData || error.message;
    const reqError = error.request;

    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      console.log(
        "Response Interceptor Error: ",
        JSON.stringify(respError, null, 2)
      );
    }

    // Example: Handle specific error codes
    if (status) {
      switch (status) {
        case 401:
          // Handle unauthorized errors (e.g., redirect to login, refresh token)
          console.log("Unauthorized access - 401. Please login again.");
          break;
        case 403:
          console.log("Forbidden - 403. You do not have permission.");
          break;
        case 404:
          console.log("Resource not found - 404.");
          break;
        case 500:
          console.log("Server error - 500. Please try again later.");
          break;
        default:
          console.log(`Error ${status}:`, respData);
      }
    } else if (reqError && !axios.isCancel(error)) {
      // Check if not a cancellation error
      // The request was made but no response was received
      console.log("Network Error: No response received from server.", reqError);
    } else if (!axios.isCancel(error)) {
      // Something happened in setting up the request that triggered an Error
      console.log("Error:", respError);
    }
    return Promise.reject(error); // Important to reject the error so it can be caught by the calling function
  }
);

export default apiClient;
