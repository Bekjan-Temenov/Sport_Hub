import apiRoot from "../../app/api";

const api = {
  postCircles: (circleData) =>
    apiRoot.post("/administrator/circles/", circleData),
  postShedule: (workScheduleData) =>
    apiRoot.post("/administrator/workschedules", workScheduleData),
  postHalls: (hallsData) => apiRoot.post("/administrator/halls", hallsData),
  aboutHalls: () => apiRoot.get("/administrator/halls"),
  aboutShedule: () => apiRoot.get('/administrator/workschedules'),
  aboutCircles: () => apiRoot.get("/administrator/circles/"),
  deleteHall: (id) => apiRoot.delete(`/administrator/halls/${id}`),
  deleteCircle: (id) => apiRoot.delete(`/administrator/circles/${id}/`),
  putHalls: (id, putHalls) =>
    apiRoot.put(`/administrator/halls/${id}`, putHalls),
  putCircles: (id, putCircles) =>
    apiRoot.put(`/administrator/circles/${id}/`, putCircles),
  putShedule: (id, putData) =>
    apiRoot.put(`/administrator/workschedules/${id}`, putData),
};
export default api;
