import apiRoot from "../../app/api";

const api = {
  postSection: (circleData) => apiRoot.post("/administrator//circles/" , circleData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),
  aboutHalls: () => apiRoot.get("/administrator//halls/"),
  aboutCircles: () => apiRoot.get("/administrator//circles/"),
  deleteHall: (id) => apiRoot.delete(`/administrator//halls/${id}/`),
  deleteCircle: (id) => apiRoot.delete(`/administrator//circles/${id}/`),
};

export default api;
