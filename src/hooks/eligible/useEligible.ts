import { useDispatch } from "react-redux";

import { Users } from "@/types/user";
import { useRouter } from "next/navigation";
import { setProfileUser } from "@/stores/slices/userSlice";

export const useEligible = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleToEligible = (dataForm: Users) => {
    dispatch(setProfileUser(dataForm));
    router.push("/eligible");
  };

  return { handleToEligible };
};
