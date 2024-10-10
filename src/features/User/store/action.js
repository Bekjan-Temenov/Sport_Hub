import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// Создаем asyncThunk для получения тренеров
export const getTrainers = createAsyncThunk(
  "trainers/fetchTrainers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getTrainers(); 
      console.log("Полученные данные тренеров:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTrainer = createAsyncThunk(
  "trainers/createTrainer",
  async (trainerData, { rejectWithValue }) => {
    try {
      const response = await api.createTrainer(trainerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)
// Создаем asyncThunk для получения клиентов
export const getClients = createAsyncThunk(
  "clients/fetchClients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getClients();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Создаем asyncThunk для создания клиента
export const createClient = createAsyncThunk(
  "clients/createClient",
  async (clientData, { rejectWithValue }) => {
    try {
      const response = await api.createClient(clientData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

