import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAdminHalls,
  fetchAdminCircles,
  section,
  deleteAdminCircle,
  deleteAdminHall,
  postHalls,
} from "./action";

const aboutSlice = createSlice({
  name: "about", 
  initialState: {
    circle: null,
    error: null,
    halls: [],
    circles: [],
    status: "idle", 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(section.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(section.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.circle = action.payload;
      })
      .addCase(section.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchAdminHalls.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdminHalls.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.halls = action.payload;
      })
      .addCase(fetchAdminHalls.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchAdminCircles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdminCircles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.circles = action.payload; 
      })
      .addCase(fetchAdminCircles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteAdminHall.fulfilled, (state, action) => {
        state.halls = state.halls.filter((hall) => hall.id !== action.payload); 
      })
      .addCase(deleteAdminHall.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteAdminCircle.fulfilled, (state, action) => {
        state.circles = state.circles.filter((circle) => circle.id !== action.payload); 
      })
      .addCase(deleteAdminCircle.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(postHalls.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postHalls.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.circle = action.payload
      })
      .addCase(postHalls.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Произошла ошибка"; 
      });
  },
});

export default aboutSlice.reducer;
