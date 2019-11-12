import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

const request = {
    POST: (url, data) => {
        return api.post(url, data)
            .then(res => res)
            .catch(err => err)
    },
    GET: (url, data) => {
        return api.get(url, data)
            .then(res => res.data)
            .catch(err => err)
    },
    PUT: (url, data) => {
        return api.put(url, data)
            .then(res => res.data)
            .catch(err => err)
    },
    DELETE: (url, data) => {
        return api.delete(url, data)
            .then(res => res.data)
            .catch(err => err)
    },
}

export { request };