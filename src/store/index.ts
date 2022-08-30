import { incrementReducer } from './increment';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";
import { filterReducer } from "./filterTodosSlice";
import { decrementReducer } from './decrement';

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
  increment: incrementReducer,
  decrement: decrementReducer
});

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
