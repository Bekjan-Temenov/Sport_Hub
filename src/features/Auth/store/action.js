import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const signup = createAsyncThunk(
    'auth/signup',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.register(userData);
            console.log("Ответ сервера:", response.data);
            return response.data;
        } catch (error) {
            console.error("Ошибка регистрации:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data || 'Ошибка регистрации');
        }
    }
);

export const activateUser = createAsyncThunk(
    'auth/activateUser',
    async (activation_code, { rejectWithValue }) => {
        if (!activation_code || activation_code.length !== 4) {
            console.error('Некорректный код активации:', activation_code);
            return rejectWithValue('Некорректный код активации');
        }

        try {
            const response = await api.activateUser(activation_code);
            console.log("Ответ сервера при активации:", response.data);
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || 'Ошибка активации';
            console.error(`Ошибка активации (статус: ${error.response?.status || 'unknown'}):`, errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);


export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.login(credentials);
            console.log("Ответ сервера при входе:", response.data);
            return response.data;
        } catch (error) {
            console.error("Ошибка входа:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data || 'Ошибка входа');
        }
    }
);

export const requestPasswordReset = createAsyncThunk(
    'auth/requestPasswordReset',
    async (email, { rejectWithValue }) => {
        try {
            const response = await api.requestPasswordReset(email);
            console.log("Ответ сервера для сброса пароля:", response.data);
            return response.data;
        } catch (error) {
            console.error("Ошибка сброса пароля:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data || 'Ошибка сброса пароля');
        }
    }
);

export const resetPasswordVerify = createAsyncThunk(
    'user/resetPasswordVerify',
    async (reset_code, { rejectWithValue }) => {
        try {
            const response = await api.resetPasswordVerify(reset_code);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);