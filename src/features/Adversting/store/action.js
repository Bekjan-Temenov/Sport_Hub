import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchAdminAdversting = createAsyncThunk(
  "admin/fetchAdversting",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.getAdversting();
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

export const postAdminAdversting = createAsyncThunk(
  "admin/postAdversting",
  async (postData, { rejectWithValue }) => {
    console.log(postData);
    try {
      const res = await api.postAdversting(postData);
      console.log("Отправить данные рекламы:", res.data);
      return res.data;
    } catch (error) {
      console.error("Ошибка отправка данных рекламы:", error);
      const message =
        error.response?.data?.message || "Ошибка при отправке рекламы.";
      return rejectWithValue(message);
    }
  }
);

export const deleteAdminAdversting = createAsyncThunk(
  "admin/adverstingHall",
  async (dalateId, { rejectWithValue }) => {
    try {
      const response = await api.deleteAdversting(dalateId);
      console.log("Зал удалён:", response.data);
      return dalateId;
    } catch (error) {
      console.error("Ошибка при удалении зала:", error);
      const message =
        error.response?.data?.message || "Ошибка при удалении зала.";
      return rejectWithValue(message);
    }
  }
);


export const postShedule = createAsyncThunk(
  "admin/postShedule",
  async (postShedule, { rejectWithValue }) => {
    console.log(postShedule);
    try {
      const res = await api.postShedule(postShedule);
      console.log("Отправить данные расписания:", res.data);
      return res.data;
    } catch (error) {
      console.error("Ошибка отправка данных расписания:", error);
      const message =
        error.response?.data?.message || "Ошибка при отправке расписания.";
      return rejectWithValue(message);
    }
  }
)
export const putAdversting = createAsyncThunk(
  "admin/putAdversting",
  async ({ id, putData }, { rejectWithValue }) => {
    console.log(id); 
    try {
      const res = await api.putAdversting(id, putData); 
      console.log("редактирована реклама:", res.data);
      return res.data; 
    } catch (error) {
      console.error("ошибка редакторе рекламы:", error);
      const message =
        error.response?.data?.message || "Ошибка редактировании рекламы.";
      return rejectWithValue(message);
    }
  }
);