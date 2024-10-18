import { createSlice } from "@reduxjs/toolkit";
import { createClient, createTrainer, getClients, getTrainers } from "./action";

const trainerSlice = createSlice({
  name: "trainers",
  initialState: {
    trainers: [],
    status: "idle", // idle | loading | succeeded | failed
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
        state.error = action.payload;
      })

      // Обработка создания тренера
      .addCase(createTrainer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTrainer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trainers.push(action.payload); // Добавляем нового тренера в список
      })
      .addCase(createTrainer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const clientSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка получения клиентов
      .addCase(getClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients = action.payload;
      })
      .addCase(getClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Обработка создания клиента
      .addCase(createClient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients.push(action.payload); // Добавляем нового клиента в список
      })
      .addCase(createClient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default { trainerSlice, clientSlice };
export { getClients, getTrainers, createClient, createTrainer };
