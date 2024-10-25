import apiRoot from "../../app/api";

const api = {
  getPayment: () => apiRoot.get("/administrator/advertisements/"),
}
export default api;