import apiRoot from "../../app/api";

const api = {
  getPayment: () => apiRoot.get("/client/payments/"),
}
export default api;