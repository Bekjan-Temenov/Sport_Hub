
import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/Auth/store/slice'
import reviewReducer from '../features/InfoGym/store/slice'
import aboutReducer from '../features/AboutUs/store/slice'


export const store = configureStore({
    reducer: {
        auth: authSlice,
        reviews: reviewReducer,
        about: aboutReducer

    }
})

