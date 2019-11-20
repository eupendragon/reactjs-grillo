import axios from 'axios';

const token = localStorage.getItem('@CacheGrillo:Token')

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {'Authorization': `Bearer ${token}`},
});

export { api };