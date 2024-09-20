import apiRoot from "../../app/api";

const api = {
    customreview: () => apiRoot.get('/bilimkana/arena/reviews/'),
    reviewpost: (reviewData) => apiRoot.post('/bilimkana/arena/reviews/', reviewData),
};

export default api;
