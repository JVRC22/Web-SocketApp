import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Persona } from 'src/app/Interfaces/persona';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-pulling-component',
  templateUrl: './pulling-component.component.html',
  styleUrls: ['./pulling-component.component.css']
})
export class PullingComponentComponent implements OnInit {
  personas: Persona[] = [];

  id: number =0 ;

  constructor(private router:Router, private personaService:PersonasService) { }
  
  ngOnInit()
  {
    this.getPersonas();

    const secondsCounter = interval(3000);
    secondsCounter.subscribe(n => {
      console.log('Obteniendo datos de la API');
      this.getPersonas();
    });
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
