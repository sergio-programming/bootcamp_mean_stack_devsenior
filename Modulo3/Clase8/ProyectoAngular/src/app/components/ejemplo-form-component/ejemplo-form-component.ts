import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-form-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo-form-component.html',
  styleUrl: './ejemplo-form-component.css'
})
export class EjemploFormComponent {

  miFormulario: FormGroup;

  constructor (private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18)]]
    });
  }

  // Metodo que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value)
    }
  }

}
