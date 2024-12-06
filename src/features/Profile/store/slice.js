import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile, updateProfile } from "./action";

const profileSlice = createSlice({
  name: 'clientProfiles',
  initialState: {
    profiles: [],
    loading: false,
    error: null,
    updateSuccess: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch client profiles';
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.updateSuccess = false;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = true;
        const updatedProfile = action.payload;
        const index = state.profiles.findIndex((profile) => profile.id === updatedProfile.id);
        if (index !== -1) {
          state.profiles[index] = updatedProfile;
        }
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.updateSuccess = false;
        state.error = action.payload || 'Failed to update client profile';
      });
  },
});

export default profileSlice.reducer;
