import { AxiosError } from "axios";

export enum API_METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

/**
 * @template T The expected shape of the data in a successful response.
 * @template E The expected shape of the error data in a failed response.
 */
export interface ApiResponse<T = unknown, E = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError<E>;
  statusCode?: number;
  isCancelled?: boolean; // Flag to indicate if the request was cancelled
}

/**
 * @template E The expected shape of the error data.
 */
export interface ApiError<E = unknown> {
  message: string;
  code?: string | number; // e.g., 'VALIDATION_ERROR', 400, 'ERR_CANCELED'
  details?: E; // Specific error details from the API
  originalError?: AxiosError<E>; // The original Axios error object
}
