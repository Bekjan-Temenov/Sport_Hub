import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { api } from "../api";

export const arena = createAsyncThunk(
  "arena/data",
  async (arenaData, { rejectedWithValue }) => {
    try {
      res = await api.arena(arenaData);
      console.log("Ответ Дата :", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectedWithValue(error.response?.data || error.message);
    }
  }
);