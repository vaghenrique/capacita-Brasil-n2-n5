// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "../features/contadorSlice";

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },
});
