import React, { FC } from "react";

// Components
import TodoItems from "./TodoItems";

// Types
import { ITodo, ITodoListProps } from "../types/data";

// Features
import { filterTodos } from "../features/FilterTodos";

const TodosList = (props: ITodoListProps) => {
  const { removeTodo, toggleTodo, light, setTodos, todos, count } =
    props;

  return (
    <div
      className={`
          ${"border-slate-500 rounded-md"},
          ${light ? "text-slate-400" : "text-slate-800"}
          `}
    >
      <div className="mt-5">
        <TodoItems
          light={light}
          todos={todos}
          setTodos={setTodos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </div>
      <div
        className={`${"flex justify-between text-xs p-4 border-2 border-slate-800 mt-2"}, ${
          light
            ? "text-slate-400 bg-slate-800 border-slate-800"
            : "text-slate-800 bg-slate-400 border-slate-400"
        }`}
      >
        <h3>{count} items left</h3>
        <div className="hidden md:hidden lg:flex">
          <button
            onClick={(e) =>
              filterTodos(e.currentTarget.textContent, todos, setTodos)
            }
            className="hover:text-blue-500"
          >
            All
          </button>
          <button
            onClick={(e) =>
              filterTodos(e.currentTarget.textContent, todos, setTodos)
            }
            className="px-3 hover:text-blue-500"
          >
            Active
          </button>
          <button
            onClick={(e) =>
              filterTodos(e.currentTarget.textContent, todos, setTodos)
            }
            className="hover:text-blue-500"
          >
            Completed
          </button>
        </div>
        <button
          onClick={(e) =>
            filterTodos(e.currentTarget.textContent, todos, setTodos)
          }
          className="hover:text-blue-500"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TodosList;
