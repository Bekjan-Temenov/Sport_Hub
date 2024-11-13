import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";


export const fetchPayment = createAsyncThunk(
  "admin/fetchPayment",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getPayment() 
        return response.data;
    } catch (error) {
      console.error('Fetch error details:', error); 
      return rejectWithValue(error.response?.data || 'Failed to fetch client profiles');
    }
  }
);
