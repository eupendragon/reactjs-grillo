import axios from 'axios';

const token = localStorage.getItem('@CacheGrillo:Token')

const api = axios.create({
    baseURL: 'https://3333-dfd00ddf-cd28-4c87-acca-6c3ec15debdb.ws-us02.gitpod.io/',
    headers: {'Authorization': `Bearer ${token}`},
});

export { api };