import { createSlice} from '@reduxjs/toolkit';
import { createTrainer } from './action';



const trainerSlice = createSlice({
    name: 'trainers',
    initialState: {
        trainers: [],
        loading: false,
        error: null,
    },
    reducers: {
        resetError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTrainer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.trainers.push(action.payload); // Добавляем нового тренера в массив
            })
            .addCase(createTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Устанавливаем ошибку
            });
    },
});

export const { resetError } = trainerSlice.actions;
export default trainerSlice.reducer;
