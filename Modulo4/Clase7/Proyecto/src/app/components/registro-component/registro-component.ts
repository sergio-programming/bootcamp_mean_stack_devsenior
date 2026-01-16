import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-component.html',
  styleUrl: './registro-component.css'
})
export class RegistroComponent {

  registroForm: FormGroup;
  mensajeError: string = '';
  mensajeExito: string = '';

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fechaNacimiento: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terminos: [false, Validators.requiredTrue]
    }, { validators: this.passwordIguales });
  }

  // Validador personalizado para contraseñas
  passwordIguales(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { notSame: true }
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      this.mensajeError = 'Algunos de los campos del formulario son incorrectos';
      this.mensajeExito = '';
      return;
    }

    this.mensajeExito = 'El usuario se ha registrado correctamente'
    this.mensajeError = '';
    this.registroForm.reset();
  }

  

}
