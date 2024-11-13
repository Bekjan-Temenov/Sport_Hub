import apiRoot from "../../app/api";

const api = {
  postCircles: (circleData) =>apiRoot.post("/administrator/circles/", circleData),
  postWorkShedule: (workScheduleData) =>apiRoot.post("/administrator/workschedules", workScheduleData),
  postShedule: (ScheduleData) => apiRoot.post("/administrator/schedul/", ScheduleData),
  postHalls: (hallsData) => apiRoot.post("/administrator/halls", hallsData),
  aboutHalls: (title) => {return apiRoot.get(`/administrator/halls?title=${title}`);},
  aboutShedule: () => apiRoot.get("/administrator/workschedules"),
  aboutCircles: ( title ) => {return  apiRoot.get(`/administrator/circles/?title=${title}`)},
  deleteHall: (id) => apiRoot.delete(`/administrator/halls/${id}`),
  deleteCircle: (id) => apiRoot.delete(`/administrator/circles/${id}/`),
  putHalls: (id, putHalls) =>apiRoot.put(`/administrator/halls/${id}`, putHalls),
  putCircles: (id, putCircles) =>apiRoot.put(`/administrator/circles/${id}/`, putCircles),
  putShedule: (id, putData) =>apiRoot.put(`/administrator/workschedules/${id}`, putData),
};
export default api;
