// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { api } from '../api';

// export const section = createAsyncThunk(
//     'section/create',
//     async (sectionPost, { rejectWithValue }) => {
//       try {
//         const response = await api.section(sectionPost);
//         return response.data; 
//       } catch (error) {
//         const message = error.response?.data || 'Something went wrong'; // проверка на наличие error.response
//         return rejectWithValue(message);
//       }
//     }
//   );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const section = createAsyncThunk(
  'section/sectionPost',
  async (sectionPost, { rejectWithValue }) => {
    try {
      const response = await api.section(sectionPost);
      return response.data;
    } catch (error) {
      // Убедитесь, что проверяете существование `response`
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      // Если `response` не существует, возвращаем сообщение об ошибке
      return rejectWithValue(error.message);
    }
  }
);