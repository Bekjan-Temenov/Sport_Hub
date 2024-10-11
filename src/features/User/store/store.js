import { configureStore } from "@reduxjs/toolkit";
import {trainerSlice, clientSlice} from "./slice";
const store = configureStore({
  reducer: {
    trainers: trainerSlice.reducer,
    clients: clientSlice.reducer,
  },
});

export default store;
