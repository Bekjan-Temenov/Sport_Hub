import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/store/slice";
import reviewReducer from "../features/InfoGym/store/slice";
import sportSlice from "../features/Home/store/slice";
import arenaSlice from "../features/Arena/store/slice";
import aboutSlice from "../features/AboutUs/store/slice";
import adverstingSlice from "../features/Adversting/store/slice";
import hallSlice from "../features/AboutUs/ui/store/slice";
import workScheduleSlice from "../features/Adversting/shedule";
import trainerSlice from "../features/User/store/slice"
import paymentSlice from "../features/Payment/store/slice"
import profileSlice from "../features/Profile/store/slice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    trainers:trainerSlice,
    sport: sportSlice,
    arena: arenaSlice,
    about: aboutSlice,
    reviews: reviewReducer,
    adversting: adverstingSlice,
    shedules:hallSlice,
    workSchedules:workScheduleSlice,
    payment:paymentSlice,
    profile:profileSlice,
  },
});
