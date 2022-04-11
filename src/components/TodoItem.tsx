import React from "react";
import { ITodo } from "src/types/data";
import { BsCheck, BsTrash } from "react-icons/bs";
import { Reorder } from "framer-motion";

interface ITodoItem extends ITodo {
  todo: ITodo[];
  light: boolean;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const {
    id,
    title,
    isCompleted,
    isVisible,
    light,
    removeTodo,
    toggleTodo,
    todo,
  } = props;
  return (
    <Reorder.Item value={todo} style={{ listStyle: "none" }}>
      {isVisible ? (
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className={`${"list-none border-b-2 border-slate-300  p-4 text-2xl"}, ${
            light
              ? "text-slate-400 bg-slate-800"
              : "text-slate-800 bg-slate-400"
          }`}
        >
          <BsCheck
            size={24}
            className={`
              ${
                isCompleted
                  ? "bg-green-600 cursor-pointer rounded-full border-2 "
                  : "cursor-pointer rounded-full border-2 "
              },
              ${
                light
                  ? "text-slate-800 bg-slate-800"
                  : "text-slate-400 bg-slate-400"
              }
            `}
            onClick={() => toggleTodo(id)}
          />
          <span className={isCompleted ? "line-through text-slate-600" : ""}>
            {title}
          </span>
          <BsTrash
            size={24}
            className="cursor-pointer hover:text-red-600"
            onClick={() => removeTodo(id)}
          />
        </li>
      ) : (
        ""
      )}
    </Reorder.Item>
  );
};

export default TodoItem;
