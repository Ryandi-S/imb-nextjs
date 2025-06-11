"use client";

import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/typography/Heading";
import { useLogout } from "@/hooks/auth/useLogout";
import { RootState } from "@/stores";
import { useSelector } from "react-redux";

/**
 * Define the Home component that displays a welcome message and a list of todos
 * @returns The Home component
 */
export default function Home() {
  const { handleLogout } = useLogout();

  /**
   * Get the current user and todos from the Redux store
   * @returns The users and todos
   */
  const { users } = useSelector((state: RootState) => state.users);
  // Render the component UI
  return (
    <>
      {/* Header section with welcome message and logout button */}
      <div className="flex justify-between items-center gap-4">
        <Heading level={1}>Welcome, {users?.firstName}</Heading>
        {/* Logout button that triggers the logout action */}
        <Button
          variant="secondary"
          className="w-[100px] font-semibold"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
