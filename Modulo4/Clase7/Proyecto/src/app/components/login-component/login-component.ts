import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  mensajeCamposInvalidos: string = '';
  mensajeError: string = '';
  mensajeIngreso: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
     if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.mensajeCamposInvalidos = 'Por favor diligenciar los campos del formulario correctamente'
      return      
    }

    const { email, password } = this.loginForm.value;

    // Aquí normalmente llamarías al backend
    if (email === 'admin@test.com' && password === '123456') {
      this.mensajeIngreso = 'Inicio de sesión exitoso';
      this.mensajeError = '';
      this.router.navigate(['/dashboard']); 
        
    }
    else {
      this.mensajeError = 'Credenciales invalidas';
      this.mensajeIngreso = '';
    }
  }

}
