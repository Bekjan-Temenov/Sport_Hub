import { createSlice } from '@reduxjs/toolkit';
import { fetchSportClasses } from './action';
// Инициальное состояние
const initialState = {
    sportClasses: [],
    loading: false,
    error: null,
};

// Slice для управления состоянием спортивных классов
const sportSlice = createSlice({
    name: 'sportClasses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSportClasses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSportClasses.fulfilled, (state, action) => {
                state.loading = false;
                state.sportClasses = action.payload;
            })
            .addCase(fetchSportClasses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

// Экспортируем редьюсер для использования в store
export default sportSlice.reducer;
