// Raw from API
/**
 * Define the TodoResponse type
 * @returns The TodoResponse type
 */
export type TodoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Data used for  UI (transformed)
/**
 * Define the Todo type
 * @returns The Todo type
 */
export type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};
