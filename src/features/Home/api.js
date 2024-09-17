import apiRoot from "../../app/api";

const api = {
    sports: (params) => apiRoot.get('/api/sport-classes/', { params }), // Передача параметров
};

export default api;
