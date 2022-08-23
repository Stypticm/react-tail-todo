import React from "react";
import {
  filterTodosAll,
  filterTodosCompleted,
  filterTodosActive
} from "../store/filterTodosSlice";

// import {
//   filterTodosActive
// } from '../store/todoSlice'

// Features
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const ButtonsAndFooter = ({ light }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.list);

  return (
    <>
      <div
        className={`lg:hidden lg:w-full flex justify-around text-xs mt-5 p-4 border-2 rounded-md, 
          ${
            light
              ? "text-slate-400 bg-slate-800 border-slate-800"
              : "text-slate-800 bg-slate-400 border-slate-400"
          }`}
      >
        <button
          onClick={(e) => {
            dispatch(filterTodosAll(todos));
          }}
          className="hover:text-blue-500"
        >
          All
        </button>
        <button
          onClick={(e) => dispatch(filterTodosActive(todos))}
          className="px-3 hover:text-blue-500"
        >
          Active
        </button>
        <button
          onClick={(e) => dispatch(filterTodosCompleted(todos))}
          className="hover:text-blue-500"
        >
          Completed
        </button>
      </div>

      <span className="flex justify-center mt-5 text-sm text-slate-500">
        Drag and drop to render list
      </span>
    </>
  );
};

export default ButtonsAndFooter;
