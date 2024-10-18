import apiRoot from "../../app/api";

const api = {
  getTrainers: () => apiRoot.get("/administrator/trainers/"),
  createTrainer: (trainerData) =>
    apiRoot.post("/administrator/trainers/", trainerData),

  getClients: () => apiRoot.get("/administrator/clients/"),
};

export default api;
