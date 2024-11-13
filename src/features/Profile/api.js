import apiRoot from "../../app/api";

const api = {
  getProfile: () => apiRoot.get("/client/profiles/"),
  updateProfile: (id, data) => apiRoot.put(`/client/profiles/${id}/`, data),
}
export default api;