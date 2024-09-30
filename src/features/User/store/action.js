    import { createAsyncThunk } from '@reduxjs/toolkit';
    import { createTrainerApi } from '../api';


export const createTrainer = createAsyncThunk(
    'trainers/createTrainer',
    async (trainerData, { rejectWithValue }) => {
        console.log('Данные тренера:', trainerData); // Логируем данные
        try {
            const response = await createTrainerApi(trainerData);
            return response.data; // Возвращаем данные созданного тренера
        } catch (error) {
            console.error('Ошибка API:', error.response.data); // Логируем ответ сервера
            return rejectWithValue(error.response.data); // Возвращаем ошибку
        }
    }
);
