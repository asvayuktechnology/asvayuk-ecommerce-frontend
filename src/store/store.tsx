"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

// ✅ TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
