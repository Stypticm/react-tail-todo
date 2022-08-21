import React from "react";

// Features
import { filterTodos } from "../features/FilterTodos";

const ButtonsAndText = ({ light, todos, setTodos }) => {
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

      <span className="flex justify-center mt-5 text-sm text-slate-500">
        Drag and drop to render list
      </span>
    </>
  );
};

export default ButtonsAndText;
