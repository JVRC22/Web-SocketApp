import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {
  public socket = io(environment.API_URL);

  constructor() { }

  coneccion()
  {
    this.socket.on('message', (data) => {
      console.log(data);
      this.socket.emit('personas', 'Hello from Angular');
    })
  }
}
