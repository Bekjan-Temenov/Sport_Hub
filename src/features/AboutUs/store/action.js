import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const section = createAsyncThunk(
  "section/create",
  async (circleData, { rejectWithValue }) => {
    try {
      const response = await api.postSection(circleData);
      return response.data;
    } catch (error) {
      console.debug(error);
      return rejectWithValue(error.response?.data || "Error creating section");
    }
  }
);

export const fetchAdminHalls = createAsyncThunk(
  "admin/fetchHalls",
  async ({  title }, { rejectWithValue }) => {
    try {
      const response = await api.aboutHalls( title)
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении залов:", error);
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

export const fetchAdminCircles = createAsyncThunk(
  "admin/fetchCircles",

  async ({  title }, { rejectWithValue }) => {
    try {
      const res = await api.aboutCircles( title);
      console.log("Полученные данные кружков:", res.data);
      return res.data;
    } catch (error) {
      console.error("Ошибка при получении кружков:", error);
      const message =
        error.response?.data?.message || "Ошибка при загрузке кружков.";
      return rejectWithValue(message);
    }
  }
);

export const deleteAdminHall = createAsyncThunk(
  "admin/deleteHall",
  async (hallId, { rejectWithValue }) => {
    try {
      const response = await api.deleteHall(hallId);
      console.log("Зал удалён:", response.data);
      return hallId;
    } catch (error) {
      console.error("Ошибка при удалении зала:", error);
      const message =
        error.response?.data?.message || "Ошибка при удалении зала.";
      return rejectWithValue(message);
    }
  }
);

export const deleteAdminCircle = createAsyncThunk(
  "admin/deleteCircle",
  async (circleId, { rejectWithValue }) => {
    try {
      const response = await api.deleteCircle(circleId);
      console.log("Кружок удалён:", response.data);
      return circleId;
    } catch (error) {
      console.error("Ошибка при удалении кружка:", error);
      const message =
        error.response?.data?.message || "Ошибка при удалении кружка.";
      return rejectWithValue(message);
    }
  }
);

export const postHalls = createAsyncThunk(
  "admin/putHalls",
  async ({ hallsData }, { rejectWithValue }) => {
    try {
      const res = await api.postHall(hallsData);
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
