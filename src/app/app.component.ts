import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {}

  //Ver tablas
  Pulling()
  {
    this.router.navigate(['/pulling']);
  }

  WebSocket()
  {
    this.router.navigate(['/web-socket']);
  }

  EventSource()
  {
    this.router.navigate(['/event-source']);
  }

  //Agregar
  Agregar()
  {
    this.router.navigate(['/agregar']);
  }
}
