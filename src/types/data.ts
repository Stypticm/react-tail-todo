export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
  isVisible: boolean;
}

export interface ITodoListProps {
  todos: ITodo[] | [];
  setTodos: (todos: ITodo[]) => void;
  light: boolean;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  count: number;
}
