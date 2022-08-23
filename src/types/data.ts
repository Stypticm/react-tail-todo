export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
  isVisible: boolean;
}

export interface ITodoListProps {
  light: boolean;
  count: number;
}
