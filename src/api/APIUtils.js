import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

const request = {
    POST: (url, data) => {
        return api.post(url, data)
            .then(res => res)
            .catch(err => err)
    },
    GET: (url, data) => {
        return api.get(url, data)
            .then(res => res)
            .catch(err => err)
    },
    PUT: (url, data) => {
        return api.put(url, data)
            .then(res => res)
            .catch(err => err)
    },
    DELETE: (url, data) => {
        return api.delete(url, data)
            .then(res => res)
            .catch(err => err)
    },
}
export { request, api };