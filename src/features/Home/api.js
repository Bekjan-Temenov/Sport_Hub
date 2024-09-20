import apiRoot from "../../app/api";

export const slider = {
    slider: () => apiRoot.get('/api/gym-info/')

}