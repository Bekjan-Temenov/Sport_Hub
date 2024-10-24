import { createSlice } from "@reduxjs/toolkit";
import { getPaymentData } from "./action";

const aboutSlice = createSlice({
    name: 'payments',
    initialState: {
        payments: [], // Исправлено: пустой массив для начального состояния
        status: 'paid', // 'idle' вместо 'paid', чтобы обозначать начальное состояние ожидания
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPaymentData.pending, (state) => {
                state.status = 'loading'; // Когда запрос выполняется
            })
            .addCase(getPaymentData.fulfilled, (state, action) => {
                state.status = 'succeeded'; 
                state.payments = action.payload; 
            })
            .addCase(getPaymentData.rejected, (state, action) => {
                state.status = 'failed'; // Если запрос завершился с ошибкой
                state.error = action.payload; // Записываем сообщение об ошибке в состояние
            });
    }
});

export default aboutSlice.reducer;

