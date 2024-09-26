import { createSlice } from "@reduxjs/toolkit";
import { fetchAdminHalls, fetchAdminCircles , deleteAdminCircle , deleteAdminHall } from "./action"; // Импортируем новое действие

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        halls: [],
        circles: [], // Новое состояние для кружков
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminHalls.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAdminHalls.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.halls = action.payload;
            })
            .addCase(fetchAdminHalls.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAdminCircles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAdminCircles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.circles = action.payload; // Обновляем состояние кружков
            })
            .addCase(fetchAdminCircles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
         .addCase(deleteAdminHall.fulfilled, (state, action) => {
             state.halls = state.halls.filter(hall => hall.id !== action.payload); // Удаляем зал из состояния
         })
        .addCase(deleteAdminHall.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(deleteAdminCircle.fulfilled, (state, action) => {
            state.circles = state.circles.filter(circle => circle.id !== action.payload); // Удаляем кружок из состояния
        })
        .addCase(deleteAdminCircle.rejected, (state, action) => {
            state.error = action.payload;
        });
        
    }
});

export default aboutSlice.reducer;
