import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Persona } from 'src/app/Interfaces/persona';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-modificar-component',
  templateUrl: './modificar-component.component.html',
  styleUrls: ['./modificar-component.component.css']
})
export class ModificarComponentComponent {
  form: FormGroup;

  id: number = 0;

  public apiFailed: boolean = false;

  constructor(private fb:FormBuilder, private personaService: PersonasService, private router:Router, private route:ActivatedRoute) {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
      ap_paterno:  ['',Validators.required],
      ap_materno:  ['',Validators.required],
      sexo:  ['',Validators.required],
      f_nac:  ['',Validators.required],
    })
  }

  ngOnInit(): void { 
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getPersona();
  }

  getPersona()
  {
    this.personaService.mostrarUnico(this.id).subscribe(persona => {this.form.patchValue(persona)});
  }

  onSubmit(values: Persona)
  {
    this.personaService.actualizarPersona(values, this.id).subscribe(
      response => 
      {
        this.router.navigate(['pulling']);
      },
      error => 
      {
        console.log(error); this.apiFailed = true;
      }
    );
  }

  onAnimationEnd()
  {
    this.apiFailed = false;
  }
}
