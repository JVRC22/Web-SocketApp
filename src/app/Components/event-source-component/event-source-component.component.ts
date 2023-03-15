import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Interfaces/persona';
import { PersonasService } from 'src/app/Services/personas.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
//import { EventSourcePolyfill } from 'event-source-polyfill';


@Component({
  selector: 'app-event-source-component',
  templateUrl: './event-source-component.component.html',
  styleUrls: ['./event-source-component.component.css']
})
export class EventSourceComponentComponent {
  personas: Persona[] = [];

  id: number = 0;

  constructor(private router:Router, private personaService:PersonasService) { }
  
  ngOnInit()
  {
    this.getPersonas();

    let sse = new EventSource(environment.API_URL + '/eventos');

    sse.addEventListener('notice', (event: MessageEvent) => {
      console.log(event.data);
      this.getPersonas();
    });
  }

  getPersonas() 
  {
    this.personaService.getPersonas().subscribe(data => this.personas = data);
  }

  editarPersona(id: number)
  {
    this.router.navigate(['modificar/',id])
  }

  deletePersona(id: number)
  {
    if (confirm("¿Está seguro de eliminar la persona?"))
    {
      this.personaService.eliminarPersona(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
