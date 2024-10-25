import { createSlice } from "@reduxjs/toolkit";
import {
  postHall,
  createWorkSchedule,
  putHall,
  putShedule,
  postCircles,
  fetchWorkSchedules,
} from "./action";

const hallSlice = createSlice({
  name: "hall",
  initialState: {
    loading: false,
    error: null,
    success: false,
    schedules: [],
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchWorkSchedules.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorkSchedules.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.schedules = action.payload;
      })
      .addCase(fetchWorkSchedules.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(postHall.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(postHall.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(postHall.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Ошибка при создании зала";
      })

      .addCase(postCircles.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(postCircles.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(postCircles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Ошибка при создании зала";
      })

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
        state.error = action.payload;
      })

      .addCase(putHall.fulfilled, (state, action) => {
        const index = state.schedules.findIndex(
          (ad) => ad.id === action.payload.id
        );
        if (index !== -1) {
          state.schedules[index] = action.payload;
        } else {
          state.schedules.push(action.payload);
        }
        state.status = "succeeded";
      })
      .addCase(putHall.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(putHall.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(putShedule.fulfilled, (state, action) => {
        const index = state.schedules.findIndex(
          (ad) => ad.id === action.payload.id
        );
        if (index !== -1) {
          state.schedules[index] = action.payload;
        } else {
          state.schedules.push(action.payload);
        }
        state.status = "succeeded";
      })
      .addCase(putShedule.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(putShedule.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export const { resetState } = hallSlice.actions;

export default hallSlice.reducer;
