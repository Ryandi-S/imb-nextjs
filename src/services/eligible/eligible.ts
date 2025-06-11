import { AppDispatch } from "@/stores";
import { setProfileUser } from "@/stores/slices/userSlice";
import { Users } from "@/types/user";

export const eligibleService = (data: Users, dispatch: AppDispatch) => {
  /**
   * Set eligible data and store to redux
   * @param data - The eligible data
   * @param dispatch - The dispatch function
   */

  console.log("eligibleService", data);

  dispatch(setProfileUser(data));
};
