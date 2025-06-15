import authApi from "@/services/api/auth";
import { Users } from "@/types/user";

const authRepository = {
  signup: async (data: Users) => {
    return await authApi.signup(data);
  },
};

export default authRepository;
