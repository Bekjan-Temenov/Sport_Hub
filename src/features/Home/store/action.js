import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

// Асинхронное действие для получения спортивных классов
export const fetchSportClasses = createAsyncThunk(
    'sportClasses/fetchSportClasses',
    async ({ sport_type, schedule } = {}, { rejectWithValue }) => {
        try {
            // Вызываем API функцию для получения спортивных классов
            const response = await api.sports(sport_type, schedule);
            console.log(response.data);
            
            console.log(response.data);

            return response.data; // Возвращаем данные при успешном запросе
        } catch (error) {
            // Возвращаем ошибку, если запрос не удался
            return rejectWithValue(error.response?.data || 'Ошибка при выполнении запроса');
        }
    }
);
