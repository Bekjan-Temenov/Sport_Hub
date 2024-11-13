import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchPayments = createAsyncThunk(
    'administrator/payments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.aboutHalls();
            console.log("sdfghjkl;", response.data);
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении залов:", error);
            return rejectWithValue(error.response.data); 
        }
    }
);



