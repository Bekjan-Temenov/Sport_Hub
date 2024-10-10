import apiRoot from "../../app/api";

export const api = {
    register: (userData) => apiRoot.post('/user/register/', userData),
    activateUser: (activation_code) => apiRoot.post('/user/activate/', { activation_code }),
    login: (credentials) => apiRoot.post('/user/login/', credentials),
    requestPasswordReset: (email) => apiRoot.post('/user/reset-password/', { email }),
    resendActivationCode: (email) => apiRoot.post('user/resend-activation-code/', { email }),
    resetPasswordVerify: (reset_code) => apiRoot.post('/user/reset-password-verify/', { reset_code }),
    resetPasswordVerifyCode: (email) => apiRoot.post('user/resen-password-verify-code/', { email }),
};
