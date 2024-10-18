import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createWorkSchedule = createAsyncThunk(
  "workSchedules/create",
  async ({ workScheduleData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://192.168.0.109:3000/administrator/workschedules",
        workScheduleData
      );
      return response.data;
    } catch (error) {
      console.error("Ошибка при создании расписания:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const workScheduleSlice = createSlice({
  name: "workSchedules",
  initialState: {
    schedules: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createWorkSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWorkSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedules.push(action.payload);
      })
      .addCase(createWorkSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Use payload from rejectWithValue
      });
  },
});

export default workScheduleSlice.reducer;
