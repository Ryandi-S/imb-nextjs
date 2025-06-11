"use client";

import { RootState } from "@/stores";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePersistHydrated } from "./usePersistHydrated";
import { useSelector } from "react-redux";

/**
 * Define the useRouteRedirect hook
 * @returns The useRouteRedirect hook
 */
const useRouteRedirect = () => {
  const hydrated = usePersistHydrated();
  const isRegistered = useSelector(
    (state: RootState) => state.users.registered
  );

  const pathname = usePathname();
  const router = useRouter();

  /**
   * Use effect to redirect the user
   * @returns The useEffect function
   */
  useEffect(() => {
    /**
     * If the store is not hydrated, return
     * @returns The useEffect function
     */
    if (!hydrated) return;

    /**
     * If the user is not registered and the path is not /sign-up, redirect to /sign-up
     * @returns The useEffect function
     */
    if (!isRegistered && pathname !== "/sign-up") {
      router.push("/sign-up");
    }

    /**
     * If the user is registered and the path is /sign-up, redirect to /
     * @returns The useEffect function
     */
    if (isRegistered && pathname === "/sign-up") {
      router.push("/");
    }
  }, [hydrated, isRegistered, pathname, router]);
};

/**
 * Export the useRouteRedirect hook
 * @returns The useRouteRedirect hook
 */
export default useRouteRedirect;
