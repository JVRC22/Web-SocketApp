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
  eventSource: EventSource = new EventSource(environment.API_URL + '/stream');

  constructor(private router:Router, private personaService:PersonasService) { }
  
  ngOnInit()
  {
    
    this.getPersonas();

    this.eventSource.addEventListener('Persona', (event) => {
      console.log('Evento persona recibido');
      //MANERA 1
        this.getPersonas();
        console.log('Persona actualizada');
       
        //MANERA 2
  /*  this.eventSource.addEventListener('Persona', (event) => {
      console.log('Evento persona recibido');
      const update_persona = JSON.parse(event.data);
      const index = this.personas.findIndex((persona) => persona.id === update_persona.id);

      if (index > -1)
      {
        this.personas[index] = update_persona;
      } else 
      {
        this.personas.push(update_persona);
      }*/
    
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
