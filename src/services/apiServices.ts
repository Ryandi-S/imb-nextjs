import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AxiosResponse } from "axios";
import { ApiResponse } from "./apiServices.type";
import apiClient from "./interceptors";
import { API_METHODS } from "./apiServices.type";

/**
 * A generic function to make API requests.
 * @template T The expected type of the response data.
 * @template R The type of the request payload (for POST, PUT, PATCH).
 * @template E The expected type of the error response data.
 * @param config AxiosRequestConfig for the request. Can include an `AbortSignal` via `config.signal`.
 * @returns Promise<ApiResponse<T, E>>
 */
const request = async <T = unknown, R = unknown, E = unknown>(
  config: AxiosRequestConfig<R> // AxiosRequestConfig can contain a `signal` property for cancellation
): Promise<ApiResponse<T, E>> => {
  try {
    const response: AxiosResponse<T> = await apiClient.request<
      T,
      AxiosResponse<T>,
      R
    >(config);
    return {
      success: true,
      data: response.data,
      statusCode: response.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError<E>;
    const errMessage = axiosError?.message || "Error";
    const errStatus = axiosError.response?.status;
    const errCode = axiosError.code;
    const errData = axiosError.response?.data;

    if (axios.isCancel(axiosError)) {
      return {
        success: false,
        isCancelled: true,
        error: {
          message: axiosError.message || "Request cancelled by client.",
          code: axiosError.code || "ERR_CANCELED", // Axios specific cancellation code
          originalError: axiosError,
        },
      };
    }
    return {
      success: false,
      error: {
        message: errMessage, // General error message
        code: errStatus || errCode, // HTTP status or Axios error code
        details: errData, // API specific error payload
        originalError: axiosError,
      },
      statusCode: errStatus,
    };
  }
};

const appServices = {
  /**
   * Performs a GET request
   * @template TResponse The expected type of the response data.
   * @template TError The expected type of the error data.
   * @param path API endpoint path
   * @param params Query parameters
   * @param config Additional axios config
   * @returns Promise<ApiResponse<TResponse, TError>>
   */
  get: <TResponse = unknown, TError = unknown>(
    path: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<TResponse, TError>> => {
    return request<TResponse, never, TError>({
      method: API_METHODS.GET,
      url: path,
      params,
      ...config,
    });
  },

  /**
   * Performs a POST request
   * @template TResponse The expected type of the response data.
   * @template TRequest The type of the request payload.
   * @template TError The expected type of the error data.
   * @param path API endpoint path
   * @param data Request body
   * @param config Additional axios config
   * @returns Promise<ApiResponse<TResponse, TError>>
   */
  post: <TResponse = unknown, TRequest = unknown, TError = unknown>(
    path: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<TResponse, TError>> => {
    return request<TResponse, TRequest, TError>({
      method: API_METHODS.POST,
      url: path,
      data,
      ...config,
    });
  },

  /**
   * Performs a POST request with FormData
   * @template TResponse The expected type of the response data.
   * @template TRequest The type of the request payload.
   * @template TError The expected type of the error data.
   * @param path API endpoint path
   * @param data FormData object
   * @param config Additional axios config
   * @returns Promise<ApiResponse<TResponse, TError>>
   */
  postFormData: <TResponse = unknown, TRequest = unknown, TError = unknown>(
    path: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<TResponse, TError>> => {
    return request<TResponse, TRequest, TError>({
      method: API_METHODS.POST,
      url: path,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        ...config?.headers,
      },
      ...config,
    });
  },

  /**
   * Performs a PUT request
   * @template TResponse The expected type of the response data.
   * @template TRequest The type of the request payload.
   * @template TError The expected type of the error data.
   * @param path API endpoint path
   * @param data Request body
   * @param config Additional axios config
   * @returns Promise<ApiResponse<TResponse, TError>>
   */
  put: <TResponse = unknown, TRequest = unknown, TError = unknown>(
    path: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<TResponse, TError>> => {
    return request<TResponse, TRequest, TError>({
      method: API_METHODS.PUT,
      url: path,
      data,
      ...config,
    });
  },

  /**
   * Performs a PATCH request
   * @template TResponse The expected type of the response data.
   * @template TRequest The type of the request payload.
   * @template TError The expected type of the error data.
   * @param path API endpoint path
   * @param data Request body
   * @param config Additional axios config
   * @returns Promise<ApiResponse<TResponse, TError>>
   */
  patch: <TResponse = unknown, TRequest = unknown, TError = unknown>(
    path: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<TResponse, TError>> => {
    return request<TResponse, TRequest, TError>({
      method: API_METHODS.PATCH,
      url: path,
      data,
      ...config,
    });
  },

  /**
   * Performs a DELETE request.
   * @template TResponse The expected type of the response data.
   * @template TError The expected type of the error data.
   * @param path API endpoint path
   * @param config Additional axios config
   * @returns Promise<ApiResponse<TResponse, TError>>
   */
  delete: <TResponse = unknown, TError = unknown>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<TResponse, TError>> => {
    return request<TResponse, never, TError>({
      method: API_METHODS.DELETE,
      url: path,
      ...config,
    });
  },

  /**
   * Performs a request with custom configuration
   * @param config Axios request configuration
   */
  request: <T = unknown, E = unknown>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T, E>> => request(config),
};

export { appServices };
