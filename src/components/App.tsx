import React, { useState, useEffect, useRef } from "react";
import { BsFillSunFill } from "react-icons/bs";

// Components
import TodoItems from "./TodoItems";
import TodosList from "./TodosList";
import ButtonsAndFooter from './ButtonsAndFooter'
import InputTodo from "./InputTodo";

// Types
import { ITodoListProps } from "../types/data";

// Features
import { useAppDispatch, useAppSelector } from "../hook";
import store, { RootState } from "../store";
import { addTodo } from "../store/todoSlice";
import { filterTodosAll } from "src/store/filterTodosSlice";
import { incrementPlus } from "src/store/increment";
import { decrementMinus } from "src/store/decrement";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [light, setLight] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const todos = useAppSelector((state: RootState) => state.todos.list)
  const counter = useAppSelector((state: RootState) => state.increment.counter)

  const addTask = () => {
    dispatch(addTodo(value))
    setValue("")
  }

  useEffect(() => {
    const result = todos.filter((item) => item.isCompleted);
    setCount(result.length);
  }, [todos]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.key === "Enter" && addTask();
  };
  
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="w-scren h-screen m-0 p-0 bg-blue-400">
      <div className="w-2/5 mx-auto">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="w-full flex justify-between align-top py-10"
        >
          <h1
            className={`
              ${"w-20 text-3xl font-bold"},
              ${
                light
                  ? "text-white tracking-widest"
                  : "font-bold text-slate-500 tracking-widest"
              }
            `}
          >
            <button onClick={() => dispatch(incrementPlus())}>+</button>
              {counter}
            <button onClick={() => dispatch(decrementMinus())}>-</button>
            TODO
          </h1>
          <BsFillSunFill
            size={24}
            className="cursor-pointer"
            style={light ? { color: "white" } : { color: "grey" }}
            onClick={() => setLight(!light)}
          />
        </div>
        <InputTodo
          value={value}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          inputRef={inputRef}
        />
        <TodosList
          light={light}
          count={count}
        />
        <ButtonsAndFooter light={light} />
      </div>
    </div>
  );
};

export default App;
