import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number,
  title: string,
  isCompleted: boolean,
  isVisible: boolean
}

type TodosState = {
  list: Todo[]
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: []
  },
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        isCompleted: false,
        isVisible: true,
      });
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const toggleTodo = state.list.find(
        (todo) => todo.id === action.payload
      );
      if (toggleTodo) {
        toggleTodo.isCompleted = !toggleTodo.isCompleted;
      }
    }
  },
});

export const { addTodo, removeTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
