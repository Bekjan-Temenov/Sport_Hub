// import { createSlice } from '@reduxjs/toolkit';
// import { section } from './action';

// const initialState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// const aboutSlice = createSlice({
//   name: 'section',
//   initialState,
//   reducers: {
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(section.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(section.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(section.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default aboutSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { section } from './action';


const aboutSlice = createSlice({
  name: 'circle',
  initialState: {
    circle: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(section.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(section.fulfilled, (state, action) => {
        state.loading = false;
        state.circle = action.payload;
      })
      .addCase(section.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default aboutSlice.reducer;
