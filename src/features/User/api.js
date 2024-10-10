import apiRoot from "../../app/api";

const api = {
  getTrainers: () => apiRoot.get("/administrator/trainers/"),
  createTrainer: (trainerData) =>
    apiRoot.post("/administrator/trainers/", trainerData),
  getTrainerById: (id) => apiRoot.get(`/administrator/trainers/${id}/`),
  updateTrainer: (id, trainerData) =>
    apiRoot.put(`/administrator/trainers/${id}/`, trainerData),
  deleteTrainer: (id) => apiRoot.delete(`/administrator/trainers/${id}/`),

  // Клиент
  getClients: () => apiRoot.get("/administrator/clients/"),
  createClient: (clientData) =>
    apiRoot.post("/administrator/clients/", clientData),
  getClientById: (id) => apiRoot.get(`/administrator/clients/${id}/`),
  updateClient: (id, clientData) =>
    apiRoot.put(`/administrator/clients/${id}/`, clientData),
  deleteClient: (id) => apiRoot.delete(`/administrator/clients/${id}/`),
};

export default api;
