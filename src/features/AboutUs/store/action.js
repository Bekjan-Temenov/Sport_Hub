import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchAdminHalls = createAsyncThunk(
    'admin/fetchHalls',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.aboutHalls();
            console.log("Полученные данные залов:", response.data);
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении залов:", error);
            return rejectWithValue(error.response.data); // Возвращаем ошибку для обработки в slice
        }
    }
);

export const deleteAdminHall = createAsyncThunk(
    'admin/deleteHall',
    async (hallId, { rejectWithValue }) => {
        try {
            const response = await api.deleteHall(hallId);
            console.log("Зал удалён:", response.data);
            return hallId; // Возвращаем id, чтобы удалить его из состояния
        } catch (error) {
            console.error("Ошибка при удалении зала:", error);
            const message = error.response?.data?.message || "Ошибка при удалении зала.";
            return rejectWithValue(message);
        }
    }
);


export const fetchAdminCircles = createAsyncThunk(
    'admin/fetchCircles',
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.aboutCircles();
            console.log("Полученные данные кружков:", res.data);
            return res.data;
        } catch (error) {
            console.error("Ошибка при получении кружков:", error);
            // Проверяем наличие поля response в ошибке и возвращаем нужные данные
            const message = error.response?.data?.message || "Ошибка при загрузке кружков.";
            return rejectWithValue(message);
        }
    }
);

export const deleteAdminCircle = createAsyncThunk(
    'admin/deleteCircle',
    async (circleId, { rejectWithValue }) => {
        try {
            const response = await api.deleteCircle(circleId);
            console.log("Кружок удалён:", response.data);
            return circleId; // Возвращаем id, чтобы удалить его из состояния
        } catch (error) {
            console.error("Ошибка при удалении кружка:", error);
            const message = error.response?.data?.message || "Ошибка при удалении кружка.";
            return rejectWithValue(message);
        }
    }
);
