"use client";

import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/typography/Heading";
import Text from "@/components/atoms/typography/Text";
import { useLogout } from "@/hooks/useLogout";
import useTodo from "@/hooks/useTodo";
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
  const { todos } = useTodo();

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

      {/* Section for displaying todos */}
      <div className="flex flex-col mt-4 gap-4">
        <Heading level={2} className="mb-2">
          Todos
        </Heading>
        {/* Map through the todos array and render each todo */}
        {todos.map((todo) => (
          <Text key={todo.id}>{todo.title}</Text>
        ))}
      </div>
    </>
  );
}
