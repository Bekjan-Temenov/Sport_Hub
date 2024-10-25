import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchProfile = createAsyncThunk(
    "admin/fetchProfile",
    async (_, { rejectWithValue }) => {
      try {
        const res = await api.getProfile();
        console.log("Полученные данные рекламы :", res.data);
        return res.data;
      } catch (error) {
        console.error("Ошибка при получении рекламы:", error);
        const message =
          error.response?.data?.message || "Ошибка при загрузке рекламы.";
        return rejectWithValue(message);
      }
    }
  );