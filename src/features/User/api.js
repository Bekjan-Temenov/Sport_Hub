import apiRoot from "../../app/api";

export const createTrainerApi = (trainerData) => {
    return apiRoot.post('/administrator/trainers/', { data: trainerData });
};