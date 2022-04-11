import { Reorder } from "framer-motion";
import React from "react";
import { ITodo } from "src/types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[] | [];
  setTodos: (todos: ITodo[]) => void;
  light: boolean;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList = (props: ITodoListProps) => {
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

export default TodoList;
