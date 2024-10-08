import axios from 'axios'

const apiRoot = axios.create({
    baseURL: 'http://192.168.68.103:3000',
})
export default apiRoot;
