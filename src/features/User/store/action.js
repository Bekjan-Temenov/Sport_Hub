import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getTrainers = createAsyncThunk(
  "trainers/fetchTrainers",
  async ({first_name}, { rejectWithValue }) => {
    try {
      const response = await api.getTrainers(first_name);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

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
export const getClients = createAsyncThunk(
  "clients/fetchClients",
  async ({name }, { rejectWithValue }) => {
    try {
      const response = await api.getClients(name);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

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

