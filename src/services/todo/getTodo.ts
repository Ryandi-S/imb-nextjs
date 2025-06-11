import { todoListAdapter } from "@/adapters/todo";
import { apiJsonPlaceHolder } from "@/configs/api";
import { Todo, TodoResponse } from "@/types/todo";
import handleApiError from "@/utils/handleApiError";

// Get all todos
/**
 * Get all todos
 * @returns The list of todos
 */
export const getTodo = async (): Promise<Todo[]> => {
  try {
    const res = await apiJsonPlaceHolder.get<TodoResponse[]>("/todos");
    return todoListAdapter(res.data);
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
