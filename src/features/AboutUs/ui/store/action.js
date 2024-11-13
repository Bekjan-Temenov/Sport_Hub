import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api"

export const postHall = createAsyncThunk(
  "admin/postHalls",
  async ({ formData, notify, errorfy, setIsOpen,  }, { rejectWithValue }) => {
    try {
      const res = await api.postHalls(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data && res.data.id) {
        notify();
        setTimeout(() => setIsOpen(false), 1000);
        return res.data.id; 
      } else {
        throw new Error("ID не найден для данного title");
      }
    } catch (error) {
      console.error("Ошибка отправка данных расписания:", error);
      const message = error.response?.data?.message || "Ошибка при отправке расписания.";
      if (errorfy) errorfy();
      return rejectWithValue(message);
    }
  }
);

export const postCircles = createAsyncThunk(
  "admin/postCircles",
  async ({ formData, notify, errorfy, setIsOpen }, { rejectWithValue }) => {
    try {
      const res = await api.postCircles(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      notify();
      setTimeout(() => setIsOpen(false), 1000);
      return res.data;
    } catch (error) {
      console.error("Ошибка отправка данных расписания:", error);
      const message =
        error.response?.data?.message || "Ошибка при отправке расписания.";
      if (errorfy) errorfy();
      return rejectWithValue(message);
    }
  }
);

export const createWorkSchedule = createAsyncThunk(
  "workSchedules/create",
  async ({ ScheduleData }, { rejectWithValue }) => {
    try {
      const res = await api.postWorkShedule(ScheduleData);
      
      return res.data;
    } catch (error) {
      console.error("Ошибка при создании расписания:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const createSchedule = createAsyncThunk(
  "createSchedule/create",
  async ({ createSchedule }, { rejectWithValue }) => {
    try {
      const res = await api.postShedule(createSchedule);
      
      return res.data;
    } catch (error) {
      console.error("Ошибка при создании расписания:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const putCircle = createAsyncThunk(
  "admin/putCircle",
  async ({ id, formData, notify, errorfy, setIsOpen }, { rejectWithValue }) => {
    console.log(id);
    try {
      const res = await api.putCircles(id, formData);
      console.log("редактирована кружков:", res.data);
      notify();
      setTimeout(() => setIsOpen(false), 1000);
      return res.data;
    } catch (error) {
      console.error("ошибка редакторе кружков:", error);
      const message =
        error.response?.data?.message || "Ошибка редактировании кружков.";
      if (errorfy) errorfy();
      return rejectWithValue(message);
    }
  }
);

export const putHall = createAsyncThunk(
  "admin/putHall",
  async ({ id, formData, notify, errorfy, setIsOpen }, { rejectWithValue }) => {
    try {
      const res = await api.putHalls(id, formData);
      notify();
      setTimeout(() => setIsOpen(false), 1000);
      return res.data;
    } catch (error) {
      console.error("ошибка редакторе заллы:", error);
      const message =
        error.response?.data?.message || "Ошибка редактировании заллы.";
      if (errorfy) errorfy();
      return rejectWithValue(message);
    }
  }
);

export const putShedule = createAsyncThunk(
  "admin/putShedule",
  async ({ id, putData }, { rejectWithValue }) => {
    console.log(putData);
    try {
      const res = await api.putShedule(id, putData);
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

export const fetchWorkSchedules = createAsyncThunk(
  "workSchedule/fetchWorkSchedules",
  async () => {
    try {
      const response = await api.aboutShedule();
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch work schedules"
      );
    }
  }
);
