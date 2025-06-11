import { signupRequestAdapter, signupResponseAdapter } from "@/adapters/signup";
import { api } from "@/configs/api";
import { Users } from "@/types/user";
import handleApiError from "@/utils/handleApiError";

// Submit signup data
/**
 * Submit signup data
 * @param data - The signup data to submit
 * @returns The submitted signup data
 */
export const submitSignup = async (data: Users) => {
  try {
    const res = await api.post("/account/signup", signupRequestAdapter(data));

    return signupResponseAdapter(res.data.data.fieldData);
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
