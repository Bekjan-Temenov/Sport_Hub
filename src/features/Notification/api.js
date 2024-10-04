import apiRoot from "../../app/api";

const api = {
    aboutHalls: () => apiRoot.get('/administrator/payments/'),
   
};

export default api;
