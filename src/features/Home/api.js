import apiRoot from "../../app/api";

export const api = {
    sport: (sportData) => apiRoot.get('/main/sport-classes/', { params: sportData }) 
};
