import apiRoot from "../../app/api";

const api = {
    aboutHalls: () => apiRoot.get('/administrator/halls/'),
    aboutCircles: () => apiRoot.get('/administrator/circles/'),
    deleteHall: (id) => apiRoot.delete(`/administrator/halls/${id}/`), 
    deleteCircle: (id) => apiRoot.delete(`/administrator/circles/${id}/`) 
    
};

export default api;