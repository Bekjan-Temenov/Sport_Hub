import axios from 'axios'

const apiRoot = axios.create({
    baseURL: 'http://192.168.68.134:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default apiRoot;
