import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filterTodosSlice = createSlice({
  name: "filters",
  initialState: {
    todos: [],
  },
  reducers: {
    filterTodosAll(state, action) {
    },
    filterTodosActive(state, action) {
      console.log(state.todos)
    },
    filterTodosCompleted(state, action) {
      console.log("Completed");
    },
    filterClearCompleted(state, action) {
      console.log("Clear completed");
    },
  },
});

export const {
  filterTodosAll,
  filterTodosActive,
  filterTodosCompleted,
  filterClearCompleted,
} = filterTodosSlice.actions;

export default filterTodosSlice.reducer;
