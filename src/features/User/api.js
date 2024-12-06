import apiRoot from "../../app/api";

const api = {
  getTrainers: ( first_name) =>{return apiRoot.get(`/administrator/trainers/?first_name=${first_name}`)},
  createTrainer: (trainerData) => apiRoot.post("/administrator/trainers/", trainerData),
  getClients: (name ) => {return apiRoot.get(`/administrator/clients/?name=${name}`)},
}
export default api;