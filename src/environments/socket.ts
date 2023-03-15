import { io } from 'socket.io-client';
import { environment } from './environment';

export const socket = io(environment.API_URL)