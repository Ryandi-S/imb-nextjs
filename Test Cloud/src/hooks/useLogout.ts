import { logout } from "@/stores/slices/userSlice";
import { useRouter } from "next/navigation";
import { persistor } from "@/stores";
import { useDispatch } from "react-redux";

/**
 * Define the useLogout hook
 * @returns The useLogout hook
 */
export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  /**
   * Handle the logout
   * @returns The handleLogout function
   */
  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    router.push("/sign-up");
  };

  /**
   * Return the handleLogout function
   * @returns The handleLogout function and other functions
   */
  return { handleLogout };
};
