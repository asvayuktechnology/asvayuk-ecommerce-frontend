"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define state type
interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 1 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = Math.max(1, state.value - 1);
    },
    reset: (state) => {
      state.value = 1;
    },
    // Optional: set counter to a specific value
    setValue: (state, action: PayloadAction<number>) => {
      state.value = Math.max(1, action.payload);
    },
  },
});

export const { increment, decrement, reset, setValue } = counterSlice.actions;
export default counterSlice.reducer;
