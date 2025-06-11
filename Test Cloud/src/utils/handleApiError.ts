import { AxiosError } from "axios";

// TODO: ? determine the error code -> Answer
/**
 * Handle API errors by checking the error type and returning appropriate messages
 * @param error - The error object to handle
 * @returns A string message describing the error
 */

const handleApiError = (error: unknown): string => {
  // Check if the error is an Axios error
  if (error instanceof AxiosError) {
    // If the error has a response, return the error message from the response
    if (error.response) {
      return error.response.data?.message || "Server error.";
    }
    // If the error has no response, return a message indicating no response from the server
    if (error.request) {
      return "No response from server.";
    }
    // If the error has no response or request, return a message indicating a request setup error
    return "Request setup error.";
  }
  // If the error is not an Axios error, return a message indicating an unexpected error
  return "Unexpected error.";
};

export default handleApiError;
