// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { signup, activateUser, login, requestPasswordReset, resetPasswordVerify } from './action';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
        isActivated: false,
        passwordResetRequested: false,
    },
    reducers: {
        resetError: (state) => {
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.isActivated = false;
        },
    },
    extraReducers: (builder) => {
        // Обработка signup
        builder
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Обработка login
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Обработка activateUser
        builder
            .addCase(activateUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(activateUser.fulfilled, (state) => {
                state.status = 'succeeded';
                state.isActivated = true;
                state.error = null;
            })
            .addCase(activateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Обработка requestPasswordReset
        builder
            .addCase(requestPasswordReset.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(requestPasswordReset.fulfilled, (state) => {
                state.status = 'succeeded';
                state.passwordResetRequested = true;
                state.error = null;
            })
            .addCase(requestPasswordReset.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Обработка resetPasswordVerify
        builder
            .addCase(resetPasswordVerify.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(resetPasswordVerify.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Обработка успешного ответа
            })
            .addCase(resetPasswordVerify.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { resetError, logout } = authSlice.actions;
export default authSlice.reducer;
