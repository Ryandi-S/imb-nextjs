import { Todo, TodoResponse } from "@/types/todo";

/**
 * One Item Adapter Data
 * @param raw - The raw todo
 * @returns The todo
 */
export const todoSingleAdapter = (raw: TodoResponse): Todo => ({
  id: raw.id,
  title: raw.title,
  isDone: raw.completed,
});

/**
 * Array Item Adapter Data
 * @param rawList - The raw list of todos
 * @returns The list of todos
 */
export const todoListAdapter = (rawList: TodoResponse[]): Todo[] =>
  rawList.map(todoSingleAdapter);
