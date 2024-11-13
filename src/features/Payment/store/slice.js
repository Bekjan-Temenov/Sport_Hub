import { createSlice } from "@reduxjs/toolkit";
import { fetchPayment } from "./action";

const profileSlice = createSlice({
  name: 'clientProfiles',
  initialState: {
    payment: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payment = action.payload;
      })
      .addCase(fetchPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch client profiles';
      });
  },
});

export default profileSlice.reducer;