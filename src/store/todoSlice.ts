import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
  isVisible: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        isCompleted: false,
        isVisible: true,
      });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const toggleTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggleTodo) {
        toggleTodo.isCompleted = !toggleTodo.isCompleted;
      }
    },
    filterTodosAll(state, action) {
      state.list = action.payload.map((todo) => {
        return {
          ...todo,
          isVisible: true
        }
      })
    },
    filterTodosActive(state, action) {
      state.list = action.payload.map((todo) => {
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
    },
    filterTodosCompleted(state, action) {
      state.list = action.payload.map((todo) => {
        if (todo.isCompleted) {
          return {
            ...todo,
            isVisible: true,
          };
        }

        return {
          ...todo,
          isVisible: false
        };
      });
    },
    filterClearCompleted(state, action) {
      state.list = state.list.filter((todo) => !todo.isCompleted);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  filterTodosAll,
  filterTodosCompleted,
  filterClearCompleted,
  filterTodosActive,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
