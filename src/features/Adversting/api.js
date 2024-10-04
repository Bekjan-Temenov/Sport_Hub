import apiRoot from "../../app/api";

const api = {
  getAdversting: () => apiRoot.get("/administrator/advertisements/"),
  postAdversting: (postData) => apiRoot.post("/administrator/advertisements/" , postData),
  deleteAdversting: (id) => apiRoot.delete(`/administrator/advertisements/${id}/` ),
  postShedule:(postShedule) => apiRoot.post ("/administrator/workschedules",postShedule)
}
export default api;