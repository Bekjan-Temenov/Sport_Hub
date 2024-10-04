import { createSlice } from "@reduxjs/toolkit";
import { administratorpayments,  } from "./action"; // Импортируем новое действие

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        
        payments: [], // Новое состояние для кружков
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(administratorpayments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(administratorpayments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.payments = action.payload;
            })
            .addCase(administratorpayments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
          
        
    }
});

export default aboutSlice.reducer;
