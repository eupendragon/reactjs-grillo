import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

const request = {
    POST: async (url, data) => {
        await api.post(url, data)
            .then(res => res)
            .catch(err => err)
    },
    GET: async (url, data) => {
        await api.get(url, data)
            .then(res => res)
            .catch(err => err)
    },
    PUT: async (url, data) => {
        await api.put(url, data)
            .then(res => res)
            .catch(err => err)
    },
    DELETE: async (url, data) => {
        await api.delete(url, data)
            .then(res => res)
            .catch(err => err)
    },
}

export { request };