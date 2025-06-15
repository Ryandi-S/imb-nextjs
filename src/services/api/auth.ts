import { Users } from "@/types/user";
import apiCall from "@/utils/helpers/apiCall";
import Endpoints from "../apiServicesEndpoint";
import { API_METHODS } from "../apiServices.type";
import { Signup } from "@/types/user";
import { signupRequestAdapter, signupResponseAdapter } from "@/adapters/signup";
import handleApiError from "@/utils/helpers/handleApiError";

const authApi = {
  signup: async (data: Users) => {
    return await apiCall<Users, Users>(
      {
        url: Endpoints.signup,
        method: API_METHODS.POST,
        useDummyData: false,
      },
      (data: Users) => {
        return signupRequestAdapter(data);
      },
      data,
      (responseData: unknown) => {
        return signupResponseAdapter(
          (responseData as { data: { fieldData: Signup } }).data.fieldData
        );
      },
      (error) => {
        throw new Error(handleApiError(error));
      }
    );
  },
};

export default authApi;
