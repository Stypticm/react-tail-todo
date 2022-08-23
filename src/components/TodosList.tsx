import React  from "react";
import { useAppDispatch, useAppSelector } from "../hook";

// Components
import TodoItems from "./TodoItems";

//Redux
import { filterClearCompleted } from "../store/filterTodosSlice";

// Types
import { ITodoListProps } from "../types/data";

// Features
import { RootState } from "../store";

const TodosList: React.FC<ITodoListProps> = ({ light, count }) => {
  const todos = useAppSelector((state: RootState) => state.todos.list);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`
          ${"border-slate-500 rounded-md"},
          ${light ? "text-slate-400" : "text-slate-800"}
          `}
    >
      <div className="mt-5">
        <TodoItems light={light} count={count} />
      </div>
      <div
        className={`${"flex justify-between text-xs p-4 border-2 border-slate-800 mt-2"}, ${
          light
            ? "text-slate-400 bg-slate-800 border-slate-800"
            : "text-slate-800 bg-slate-400 border-slate-400"
        }`}
      >
        <h3>{count} items left</h3>
        <div className="hidden md:hidden lg:flex"></div>
        <button
          onClick={(e) => dispatch(filterClearCompleted(todos))}
          className="hover:text-blue-500"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TodosList;
