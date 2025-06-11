import { signupRequestAdapter, signupResponseAdapter } from "@/adapters/signup";
import { ENDPOINTS } from "@/configs/endpoints";
import { AppDispatch } from "@/stores";
import { setProfileUser } from "@/stores/slices/userSlice";
import { Method } from "@/types/endpoint";
import { Signup, Users } from "@/types/user";
import apiCall from "@/utils/apiCall";
import handleApiError from "@/utils/handleApiError";

/**
 *   Signup service
 * @param data - The signup data to submit
 * @param dispatch - The dispatch function
 * @returns The signup data
 */
export const signupService = async (
  data: Users,
  dispatch: AppDispatch
): Promise<Users> => {
  return await apiCall<Users, Users>(
    {
      url: ENDPOINTS.SIGNUP,
      method: Method.POST,
      useDummyData: false,
    },
    (data: Users) => {
      return signupRequestAdapter(data);
    },
    data,
    (responseData: unknown) => {
      const res = signupResponseAdapter(
        (responseData as { fieldData: Signup }).fieldData
      );
      dispatch(setProfileUser(res));
      return res;
    },
    (error) => {
      throw new Error(handleApiError(error));
    }
  );
};
