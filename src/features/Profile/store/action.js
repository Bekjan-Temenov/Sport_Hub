import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import axios from "axios";

export const fetchProfile = createAsyncThunk(
  'admin/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getProfile();  
        return response.data;
    } catch (error) {
      console.error('Fetch error details:', error); // Detailed error logging
      return rejectWithValue(error.response?.data || 'Failed to fetch client profiles');
    }
  }
);
export const updateProfile = createAsyncThunk(
  'client/updateProfile',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.updateProfile(id, data);
      return response.data;
    } catch (error) {
      console.error('Update error details:', error);
      return rejectWithValue(error.response?.data || 'Failed to update client profile');
    }
  }
);