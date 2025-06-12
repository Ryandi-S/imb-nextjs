import { AuthService } from "@/services/auth";
import { Users } from "@/types/user";

/**
 * Auth Repository
 * @returns The Auth Repository
 */
export const AuthRepository = {
  /**
   * Sign Up
   * @param input - The input data
   * @returns The sign up data
   */
  async SignUp(
    input: Users
  ): Promise<{ data: Users | null; error: Error | null }> {
    /**
     * Call the sign up service
     * @param input - The input data
     * @returns The sign up data
     */
    const { data, error } = await AuthService.SignUp(input);
    /**
     * Return the sign up data
     * @param error from API
     * @param data from API
     */
    return { data, error };
  },
};
