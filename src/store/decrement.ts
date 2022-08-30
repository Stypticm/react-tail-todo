import { initialState } from "./increment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const decrementSlice = createSlice({
  name: "decrement",
  initialState,
  reducers: {
    decrementMinus: (state, action: PayloadAction<number>) => {
      console.log(initialState.counter)
    },
  },
});

export const { decrementMinus } = decrementSlice.actions;
export const decrementReducer = decrementSlice.reducer;
