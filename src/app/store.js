import { configureStore } from "@reduxjs/toolkit";
import sportClassesReducer from "../features/Home/store/slice";


export const store = configureStore({
    reducer: {
        sportClasses: sportClassesReducer
    }
})