import axios from 'axios'

const isDev = import.meta.env.NODE_DEV === 'development'

console.log(isDev)

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})  