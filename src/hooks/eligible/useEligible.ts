import { useDispatch } from "react-redux";

import { eligibleService } from "@/services/eligible/eligible";
import { Users } from "@/types/user";
import { useRouter } from "next/navigation";

export const useEligible = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleToEligible = (dataForm: Users) => {
    eligibleService(dataForm, dispatch);
    router.push("/eligible");
  };

  return { handleToEligible };
};
