import authApi from "@/services/api/auth";
import { Users } from "@/types/user";

/**
 * Define the auth repository
 * use comunication with the service
 * @returns The auth repository
 */
const authRepository = {
  signup: async (data: Users) => {
    return await authApi.signup(data);
  },
};

export default authRepository;
