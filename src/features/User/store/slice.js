import { createSlice } from "@reduxjs/toolkit";
import { createTrainer, getClients, getTrainers } from "./action";

const trainerSlice = createSlice({
  name: "trainers",
  initialState: {
    trainers: [],
    clients: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrainers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTrainers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trainers = action.payload;
      })
      .addCase(getTrainers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; 
      })

      
      .addCase(createTrainer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTrainer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trainers.push(action.payload);
      })
      .addCase(createTrainer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; 
      })

      .addCase(getClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients = action.payload;
      })
      .addCase(getClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; // Используем action.error.message
      });
  },
});


export default trainerSlice.reducer 
export { getClients, getTrainers, createTrainer };
