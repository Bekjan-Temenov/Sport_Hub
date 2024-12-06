import apiRoot from "../../app/api";

export const api = {
    paymentHalls: () => apiRoot.get('/administrator/payments/'),
};
