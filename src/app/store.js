import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/store/slice";
import sportSlice from "../features/Home/store/slice";
import arenaSlice from "../features/Arena/store/slice";
import aboutSlice from "../features/AboutUs/store/slice";
import reviewReducer from "../features/InfoGym/store/slice";
import adverstingSlice from "../features/Adversting/store/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    sport: sportSlice,
    arena: arenaSlice,
    about: aboutSlice,
    reviews: reviewReducer,
    adversting: adverstingSlice,
  },
});
