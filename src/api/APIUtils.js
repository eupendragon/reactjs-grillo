import axios from 'axios';

const token = localStorage.getItem('@CacheGrillo:Token')

const api = axios.create({
    baseURL: 'https://3333-a6ed127b-4d1f-4137-ae95-f5bd4566c8b0.ws-us02.gitpod.io/',
    headers: {'Authorization': `Bearer ${token}`},
});

export { api };