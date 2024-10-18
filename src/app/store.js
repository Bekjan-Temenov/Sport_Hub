import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/store/slice";
import reviewReducer from "../features/InfoGym/store/slice";
import trainersReducer from "../features/User/store/slice";
import clientsReducer from "../features/User/store/slice";
import sportSlice from "../features/Home/store/slice";
import arenaSlice from "../features/Arena/store/slice";
import aboutSlice from "../features/AboutUs/store/slice";
import adverstingSlice from "../features/Adversting/store/slice";
import hallSlice from "../features/AboutUs/ui/store/slice";
import workScheduleSlice from "../features/Adversting/shedule";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    trainers: trainersReducer,
    clients: clientsReducer,
    sport: sportSlice,
    arena: arenaSlice,
    about: aboutSlice,
    reviews: reviewReducer,
    adversting: adverstingSlice,
    hall:hallSlice,
    workSchedules:workScheduleSlice
  },
});
