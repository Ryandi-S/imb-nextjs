import { Signup, Users } from "@/types/user";

/**
 * Adapter Data Request
 * @param data - The data to adapt
 * @returns The adapted data
 */
export const signupRequestAdapter = (data: Users): Signup => {
  return {
    name: data.firstName,
    slug: data.firstName.toLowerCase().replace(/ /g, "-") ?? "",
    phone: data.phoneNumber,
    email: data.email,
  };
};

/**
 * Adapter Data Response
 * @param data - The data to adapt
 * @returns The adapted data
 */
export const signupResponseAdapter = (data: Signup): Users => {
  return {
    firstName: data.name ?? "",
    phoneNumber: data.phone ?? "",
    email: data.email ?? "",
  };
};
