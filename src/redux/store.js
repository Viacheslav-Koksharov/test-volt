import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./todos-slice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    todos: tasksReducer,
    filters: filtersReducer,
  },
});