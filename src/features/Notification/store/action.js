import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
    '/administrator/payments/',
    async () => {
        const response = await api.customreview();
        return response.data;
    }
);


export const fetchPayments = createAsyncThunk(
    'administrator/payments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.aboutHalls();
            console.log("sdfghjkl;", response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
           
        }
    }
);
