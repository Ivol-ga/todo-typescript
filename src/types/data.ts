export type Todo = {
  id: number;
  title: string;
  complete: boolean;
};
export interface ITodoItem extends Todo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export type FilterValuesType = "all" | "complete" | "active";
