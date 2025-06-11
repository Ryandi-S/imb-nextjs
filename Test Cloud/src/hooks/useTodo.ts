import { getTodo } from "@/services/todo/getTodo";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";

// TESTING IMPLEMENTATION GET DATA FROM API

/**
 * Define the useTodo hook
 * @returns The useTodo hook
 */
const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Use effect to fetch the todos
   * @returns The useEffect function
   */
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodo();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  /**
   * Return the todos
   * @returns The todos
   */
  return { todos };
};

/**
 * Export the useTodo hook
 * @returns The useTodo hook
 */
export default useTodo;
