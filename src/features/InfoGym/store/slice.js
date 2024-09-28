import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews, postReview } from './action';

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(postReview.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postReview.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Можно добавить логику для обновления состояния с новым отзывом
                state.reviews.push(action.payload);
            })
            .addCase(postReview.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default reviewSlice.reducer;
