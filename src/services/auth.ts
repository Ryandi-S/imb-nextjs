import { signupRequestAdapter, signupResponseAdapter } from "@/adapters/signup";
import { ENDPOINTS } from "@/configs/endpoints";
import { Signup, Users } from "@/types/user";
import apiCall from "@/utils/apiCall";

/**
 * Auth Service
 * @returns The Auth Service
 */

export const AuthService = {
  /**
   * Sign Up
   * @param input - The input data
   * @returns The sign up data
   */
  SignUp(input: Users) {
    /**
     * Call the sign up API
     * @util apiCall
     * @param ENDPOINTS.SIGNUP --> url
     * @param signupRequestAdapter --> adapter
     * @param input --> values
     * @param signupResponseAdapter --> onSuccess
     * @returns The sign up data
     */
    return apiCall<Users, Users>(
      ENDPOINTS.SIGNUP,
      signupRequestAdapter,
      input,
      (data: unknown) => signupResponseAdapter(data as Signup)
    );
  },
};
