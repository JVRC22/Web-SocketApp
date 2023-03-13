import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Interfaces/persona';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-agregar-component',
  templateUrl: './agregar-component.component.html',
  styleUrls: ['./agregar-component.component.css']
})
export class AgregarComponentComponent implements OnInit {
  form: FormGroup;

  public apiFailed: boolean = false;

  constructor(private fb:FormBuilder, private personaService:PersonasService, private router:Router) {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
      ap_paterno:  ['',Validators.required],
      ap_materno:  ['',Validators.required],
      sexo:  ['',Validators.required],
      f_nac:  ['',Validators.required],
    })
  }

  ngOnInit(): void { }

  onSubmit(values: Persona)
  {
    this.personaService.addPersona(values).subscribe(
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
