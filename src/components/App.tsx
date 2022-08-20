import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import { BsFillSunFill } from "react-icons/bs";
import { ITodo } from "../types/data";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [count, setCount] = useState(0);
  const [light, setLight] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const result = todos.filter((item) => (item.isCompleted))
    setCount(result.length)
  }, [todos])

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

  const filterTodos = (group: string): void => {
    const initial = [...todos];

    const all = initial.map((todo) => {
      return {
        ...todo,
        isVisible: true,
      };
    });

    const active = initial.map((todo) => {
      if (!todo.isCompleted) {
        return {
          ...todo,
          isVisible: true,
        };
      }

      return {
        ...todo,
        isVisible: false,
      };
    });

    const completed = initial.map((todo) => {
      if (todo.isCompleted)
        return {
          ...todo,
          isVisible: true,
        };

      return {
        ...todo,
        isVisible: false,
      };
    });

    const clearCompleted = initial.filter((todo) => !todo.isCompleted);

    switch (group) {
      case "All":
        setTodos(all);
        break;
      case "Active":
        setTodos(active);
        break;
      case "Completed":
        setTodos(completed);
        break;
      case "Clear completed":
        setTodos(clearCompleted);
        break;
      default:
        break;
    }
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
        <div className="w-full">
          <div className="flex justify-center">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Create a new todo..."
              className="w-screen bg-slate-800 text-slate-400 p-5"
              onKeyPress={handleKeyDown}
              ref={inputRef}
            />
          </div>
        </div>
        <div
          className={`
          ${"border-slate-500 rounded-md"},
          ${light ? "text-slate-400" : "text-slate-800"}
          `}
        >
          <div className="mt-5">
            <TodoList
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
                onClick={(e) => filterTodos(e.currentTarget.textContent)}
                className="hover:text-blue-500"
              >
                All
              </button>
              <button
                onClick={(e) => filterTodos(e.currentTarget.textContent)}
                className="px-3 hover:text-blue-500"
              >
                Active
              </button>
              <button
                onClick={(e) => filterTodos(e.currentTarget.textContent)}
                className="hover:text-blue-500"
              >
                Completed
              </button>
            </div>
            <button
              onClick={(e) => filterTodos(e.currentTarget.textContent)}
              className="hover:text-blue-500"
            >
              Clear completed
            </button>
          </div>
        </div>
        <div
          className={`lg:hidden lg:w-full flex justify-around text-xs mt-5 p-4 border-2 rounded-md, 
          ${
            light
                ? "text-slate-400 bg-slate-800 border-slate-800"
                : "text-slate-800 bg-slate-400 border-slate-400"
          }`}
        >
          <button
            onClick={(e) => filterTodos(e.currentTarget.textContent)}
            className="hover:text-blue-500"
          >
            All
          </button>
          <button
            onClick={(e) => filterTodos(e.currentTarget.textContent)}
            className="px-3 hover:text-blue-500"
          >
            Active
          </button>
          <button
            onClick={(e) => filterTodos(e.currentTarget.textContent)}
            className="hover:text-blue-500"
          >
            Completed
          </button>
        </div>

        <span className="flex justify-center mt-5 text-sm text-slate-500">
          Drag and drop to render list
        </span>
      </div>
    </div>
  );
};

export default App;
