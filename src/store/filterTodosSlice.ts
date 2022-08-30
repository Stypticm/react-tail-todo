import { todoSlice } from "./todoSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from ".";

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

export const filterTodosSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterTodosAll(state, action) {
      state.list = action.payload;
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
    filterTodosCompleted(state, action) {},
    filterClearCompleted(state, action) {
      state.list = state.list.filter((todo) => !todo.isCompleted);
    },
  },
});

export const {
  filterTodosAll,
  filterTodosCompleted,
  filterClearCompleted,
  filterTodosActive,
} = filterTodosSlice.actions;

export const filterReducer = filterTodosSlice.reducer;
