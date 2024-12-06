import apiRoot from "../../app/api";

const api = {
  getAdversting: (phone, title) => {return apiRoot.get(`/administrator/advertisements/?title=${title}`);}, 
  postAdversting: (postData) => apiRoot.post("/administrator/advertisements/" , postData),
  deleteAdversting: (id) => apiRoot.delete(`/administrator/advertisements/${id}/` ),
  postShedule:(postShedule) => apiRoot.post ("/administrator/workschedules",postShedule),
  putAdversting :(id,putData) => apiRoot.put(`/administrator/advertisements/${id}/`,putData),
  fetchWorkShedule:(postWorkShedule) => apiRoot.post("/administrator/workschedules" , postWorkShedule),
}
export default api;