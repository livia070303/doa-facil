

import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://doa-facil-api-tkba.vercel.app',
    withCredentials: true
})