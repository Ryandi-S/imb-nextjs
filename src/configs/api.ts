import axios from "axios";

// Define the apiJsonPlaceHolder
/**
 * Define the apiJsonPlaceHolder
 * @returns The apiJsonPlaceHolder
 */
export const apiJsonPlaceHolder = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_JSON_PLACE_HOLDER,
});

// Define the api
/**
 * Define the api
 * @returns The api
 */
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
