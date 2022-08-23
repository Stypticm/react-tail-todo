import React from "react";
import { BsCheck, BsTrash } from "react-icons/bs";
import { Reorder } from "framer-motion";

// Redux
import { removeTodo, toggleTodo } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../hook";
import { RootState } from "../store";

interface TodoItemProps {
  id: number;
  title: string;
  isCompleted: boolean;
  isVisible: boolean;
  light: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  isCompleted,
  isVisible,
  light,
}) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos.list);

  return (
    <Reorder.Item value={todos} style={{ listStyle: "none" }}>
      {isVisible ? (
        <div
          key={id}
          className={`${"flex justify-between content-center border-2 list-none p-4 text-2xl"}, ${
            light
              ? "text-slate-400 bg-slate-800 border-slate-900"
              : "text-slate-800 bg-slate-400 border-slate-500"
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
            onClick={() => dispatch(toggleTodo(id))}
          />
          <span className={isCompleted ? "line-through text-slate-600" : ""}>
            {title}
          </span>
          <BsTrash
            size={24}
            className="cursor-pointer hover:text-red-600"
            onClick={() => dispatch(removeTodo(id))}
          />
        </div>
      ) : (
        ""
      )}
    </Reorder.Item>
  );
};

export default TodoItem;
