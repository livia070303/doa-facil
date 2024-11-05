import axios from 'axios'

const isDev = import.meta.env.MODE === 'development'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})  