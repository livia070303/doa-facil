import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://doa-facil-api-tkba.vercel.app',
    // baseURL: 'http://localhost:8000',
    withCredentials: true
})  