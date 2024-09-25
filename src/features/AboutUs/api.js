import apiRoot from "../../app/api";

export const api = {
    section: (sectionPost) => apiRoot.post('/administrator/circles', sectionPost)
};
