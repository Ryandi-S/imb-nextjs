import { API_METHODS } from "@/services/apiServices.type";

/**
 * Define the endpoint
 * @returns The endpoint object
 */
export type Endpoint = {
  url: string;
  method: API_METHODS;
  useDummyData: boolean;
};
