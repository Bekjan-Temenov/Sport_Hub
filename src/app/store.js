// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/Auth/store/slice'

export const store = configureStore({
    reducer: {
        auth:authSlice,
        
    },
});

