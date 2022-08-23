import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filterTodosReducer from "./filterTodosSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterTodosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
