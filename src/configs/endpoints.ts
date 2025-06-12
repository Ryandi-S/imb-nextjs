import { Endpoint, Method } from "@/types/endpoint";

/**
 * Define the endpoints Constant for the API URL
 * @returns The endpoints object
 */
export const ENDPOINTS: Record<string, Endpoint> = {
  SIGNUP: {
    url: "/account/signup",
    method: Method.POST,
    useDummyData: false,
  },
};
