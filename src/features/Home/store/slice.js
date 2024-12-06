import { createSlice } from "@reduxjs/toolkit";
import { sport } from "./action";

const sportSlice = createSlice({
    name: "sport",
    initialState: {
        sports: [],
        status: 'idle', 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sport.pending, (state) => {
                state.status = "loading";
                state.error = null; // Обнуляем ошибку при новой попытке загрузки
            })
            .addCase(sport.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.sports = action.payload; // Устанавливаем загруженные данные
            })
            .addCase(sport.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || 'Ошибка загрузки данных'; // Обновляем статус и сохраняем ошибку
            });
    },
});

export default sportSlice.reducer;
