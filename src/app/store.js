// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/Auth/store/slice'

const store = configureStore({
    reducer: {
        auth:authSlice,
        
    },
});

export default store;
