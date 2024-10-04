import { createSlice } from "@reduxjs/toolkit";
import { fetchAdminAdversting, postAdminAdversting, deleteAdminAdversting , postShedule} from "./action";

const adverstingSlice = createSlice({
  name: "adversting",
  initialState: {
    adversting: [],
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
  },
});

export default adverstingSlice.reducer;
