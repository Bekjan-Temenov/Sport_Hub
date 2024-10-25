import { createSlice } from "@reduxjs/toolkit";
import { fetchPayment } from "./action";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPayment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.payment = action.payload;
      })
      .addCase(fetchPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;
