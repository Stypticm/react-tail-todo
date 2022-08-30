import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  counter: 0
};

export const incrementSlice = createSlice({
  name: "incrment",
  initialState,
  reducers: {
    incrementPlus: (state, action: PayloadAction<number>) => {
        state.counter += 1;
    }
  }
});

export const { incrementPlus } = incrementSlice.actions;
export const incrementReducer = incrementSlice.reducer;
