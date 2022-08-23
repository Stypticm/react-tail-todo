import React from "react";
import { Reorder } from "framer-motion";

// Components
import TodoItem from "./TodoItem";

// Types
import { ITodoListProps } from "../types/data";
import { useAppSelector } from "../hook";
import { RootState } from "../store";

const TodoItems: React.FC<ITodoListProps> = ({ light }) => {
  const todos = useAppSelector((state: RootState) => state.todos.list)

  return (
    <Reorder.Group as="div" axis="y" values={todos} onReorder={prev => [...todos]}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          light={light}
          {...todo}
        />
      ))}
    </Reorder.Group>
  );
};

export default TodoItems;
