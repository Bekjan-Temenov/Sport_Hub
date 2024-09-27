// src/store/reviewActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api'; // Убедитесь, что путь правильный

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await api.customreview();
        console.log(response.data);
        
        return response.data;
    }
);

export const postReview = createAsyncThunk(
    'reviews/postReview',
    async (reviewData, { rejectWithValue }) => {
        try {
            const response = await api.reviewpost(reviewData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);