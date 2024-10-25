import apiRoot from "../../app/api";

const api = {
  getProfile: () => apiRoot.get("/client/profiles/"),
}
export default api;