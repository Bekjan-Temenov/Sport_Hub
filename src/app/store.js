
import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/Auth/store/slice'
import reviewReducer from '../features/InfoGym/store/slice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        reviews: reviewReducer,
    }
})



export default store;

