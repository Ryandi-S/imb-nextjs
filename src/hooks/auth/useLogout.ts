import { logout } from "@/redux/reducers/user";
import { useRouter } from "next/navigation";
import { persistor } from "@/redux/stores";
import { useAppDispatch } from "@/redux/hooks/useAppDispatch";

/**
 * Define the useLogout hook
 * @returns The useLogout hook
 */
export const useLogout = () => {
  const dispatch = useAppDispatch();
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
