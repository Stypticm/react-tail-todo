import React from "react";
import { Reorder } from "framer-motion";

// Components
import TodoItem from "./TodoItem";

// Types
import { ITodo } from "../types/data";

interface ITodoListProps {
  todos: ITodo[] | [];
  setTodos: (todos: ITodo[]) => void;
  light: boolean;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItems = (props: ITodoListProps) => {
  const { removeTodo, toggleTodo, light, setTodos, todos } = props;

  return (
    <Reorder.Group as="div" axis="y" values={todos} onReorder={setTodos}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          {...todo}
          light={light}
          setTodos={setTodos}
          todo={todo}
        />
      ))}
    </Reorder.Group>
  );
};

export default TodoItems;
