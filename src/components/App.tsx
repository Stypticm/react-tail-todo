import React, { useState, useEffect, useRef } from "react";
import { BsFillSunFill } from "react-icons/bs";

// Components
import TodoItems from "./TodoItems";
import TodosList from "./TodosList";
import ButtonsAndText from './ButtonsAndText'
import InputTodo from "./InputTodo";

// Types
import { ITodo } from "../types/data";

// Features
import { filterTodos } from "../features/FilterTodos";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [count, setCount] = useState(0);
  const [light, setLight] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const result = todos.filter((item) => item.isCompleted);
    setCount(result.length);
  }, [todos]);

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          isCompleted: false,
          isVisible: true,
        },
      ]);
      setValue("");
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.key === "Enter" && addTodo();
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
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
          todos={todos}
          setTodos={setTodos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
        <ButtonsAndText light={light} todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
};

export default App;
