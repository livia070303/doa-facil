import { io } from 'socket.io-client';

 
const SOCKET_URL = import.meta.env.VITE_API_URL;

// use essa url |
//              V localmente

// const SOCKET_URL = "http://localhost:8000"

const socket = io(SOCKET_URL, {
  withCredentials: true,
  transports: ['websocket'],
});

export default socket;