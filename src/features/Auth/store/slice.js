// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
    signup,
    activateUser,
    login,
    requestPasswordReset,
    resetPasswordVerify,
    resendActivationCode // Импортируем новое действие
} from './action';

const authSlice = createSlice({
    name: 'auth',
    initialState : {
        user: null,
        email: localStorage.getItem('email') || null, // Восстановление email из localStorage
        status: 'idle',
        error: null,
        isActivated: false,
        activationCodeResent: false,
    },      


    reducers: {
        resetError: (state) => {
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.email = null; // Очистка email при выходе
            localStorage.removeItem('email'); // Удаление email из localStorage
        },
        resetActivationCodeStatus: (state) => {
            state.activationCodeResent = false; // Сбрасываем статус повторной отправки
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
                state.email = action.payload.email; // Сохранение email
                localStorage.setItem('email', action.payload.email); // Сохранение в localStorage
            })

            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            


            // В обработчике fulfilled для signup
        
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
            })
           


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
            .addCase(resetPasswordVerify.fulfilled, (state) => {
                state.status = 'succeeded';
                // Обработка успешного ответа
            })
            .addCase(resetPasswordVerify.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Обработка resendActivationCode
        builder
            .addCase(resendActivationCode.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(resendActivationCode.fulfilled, (state) => {
                state.status = 'succeeded';
                state.activationCodeResent = true;
                state.error = null;
            })
            .addCase(resendActivationCode.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { resetError, logout, resetActivationCodeStatus } = authSlice.actions;
export default authSlice.reducer;
