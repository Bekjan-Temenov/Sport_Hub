import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
    '/administrator/payments/',
    async () => {
        const response = await api.customreview();
        return response.data;
    }
);

export const getPaymentData = createAsyncThunk(
    'administrator/payments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.paymentHalls();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
           
        }1
    }
);
