import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Interfaces/persona';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-web-socket-component',
  templateUrl: './web-socket-component.component.html',
  styleUrls: ['./web-socket-component.component.css']
})
export class WebSocketComponentComponent {
  personas: Persona[] = [];

  id: number =0 ;

  constructor(private router:Router, private personaService:PersonasService) { }
  
  ngOnInit()
  {
    this.getPersonas();
  }

  getPersonas() {
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
