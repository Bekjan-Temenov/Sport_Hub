import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/Auth/store/slice'
import reviewReducer from '../features/InfoGym/store/slice'
import aboutReducer from '../features/AboutUs/store/slice'
import paymentReducer from '../features/AboutUs/store/slice'; 
import {trainersReducer, clientsReducer} from '../features/User/store/slice'
import sportSlice from "../features/Home/store/slice";
import arenaSlice from "../features/Arena/store/slice";
import adverstingSlice from "../features/Adversting/store/slice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        reviews: reviewReducer,
        about: aboutReducer,
        payments: paymentReducer, 
        trainers: trainersReducer,
        clients: clientsReducer,
      sport: sportSlice,
      arena: arenaSlice,
        adversting: adverstingSlice,
    }
})
