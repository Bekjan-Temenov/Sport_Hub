import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAdminAdversting,
  postAdminAdversting,
  deleteAdminAdversting,
  postShedule,
  putAdversting,
  createWorkSchedule,
} from "./action";

const adverstingSlice = createSlice({
  name: "adversting",
  initialState: {
    adversting: [],
    schedules: [],
    loading: false,
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminAdversting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdminAdversting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.adversting = action.payload;
      })
      .addCase(fetchAdminAdversting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(postAdminAdversting.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postAdminAdversting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.adversting.push(action.payload);
      })
      .addCase(postAdminAdversting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(deleteAdminAdversting.fulfilled, (state, action) => {
        state.adversting = state.adversting.filter(
          (ad) => ad.id !== action.payload
        );
      })
      .addCase(deleteAdminAdversting.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(postShedule.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.adversting.push(action.payload);
      })
      .addCase(postShedule.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(putAdversting.fulfilled, (state, action) => {
        const index = state.adversting.findIndex(
          (ad) => ad.id === action.payload.id
        );
        if (index !== -1) {
          state.adversting[index] = action.payload;
        } else {
          state.adversting.push(action.payload);
        }
        state.status = "succeeded";
      })
      .addCase(putAdversting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(putAdversting.pending, (state) => {
        state.status = "loading";
        state.error = null;
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
      });
  },
});

export default adverstingSlice.reducer;
