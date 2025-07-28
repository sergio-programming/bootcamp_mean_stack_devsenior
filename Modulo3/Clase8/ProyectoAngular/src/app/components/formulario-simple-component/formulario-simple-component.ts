import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-formulario-simple-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-simple-component.html',
  styleUrl: './formulario-simple-component.css'
})
export class FormularioSimpleComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      banda: ['', Validators.required],
      canciones: this.fb.array([this.crearCancion()])
    });
  }

  //Metodo para obtener las canciones
  get canciones(): FormArray {
    return this.formulario.get('canciones') as FormArray
  }

  crearCancion(): FormGroup {
    return this.fb.group({
      cancion: ['', Validators.required]
    })
  }

  agregarCancion() {
    this.canciones.push(this.crearCancion());
  }

  eliminarCancion(index: number) {
    if (this.canciones.length > 0) {
      this.canciones.removeAt(index);
    }
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value)
    }
  }

}
