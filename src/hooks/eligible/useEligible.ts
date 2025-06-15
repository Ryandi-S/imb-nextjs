import { useAppDispatch } from "@/redux/hooks/useAppDispatch";

import { Users } from "@/types/user";
import { useRouter } from "next/navigation";
import { setProfileUser } from "@/redux/reducers/user";

export const useEligible = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleToEligible = (dataForm: Users) => {
    dispatch(setProfileUser(dataForm));
    router.push("/eligible");
  };

  return { handleToEligible };
};
