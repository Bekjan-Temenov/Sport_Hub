import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const sport = createAsyncThunk ( 
   'sport/post',
   async (sportPost,{rejectWithValue}) => {
    try {
        const res = await api.sport(sportPost);
        console.log('message',res.data);
    } catch (error) {
        return rejectWithValue(error.response.data || 'Ошибка загрузки данных')
    }
   }
)
