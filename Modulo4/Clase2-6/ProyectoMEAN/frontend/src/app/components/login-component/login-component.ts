import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from '../../services/auth-services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  mensajeFormularioInvalido: string = '';
  mensajeErrorCredenciales: string = '';
  mensajeExitoso: string = '';

  constructor (
    private authServices: AuthServices,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.mensajeFormularioInvalido = 'Por favor completa los campos del formulario correctamente';
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authServices.login({ email, password }).subscribe({
      // Si el login es exitoso, navegamos a la ruta protegida
      next: () => {
        this.mensajeExitoso = 'Inicio de sesión exitoso 🎉';
        this.mensajeErrorCredenciales = '';
        this.router.navigate(['/home']);
      }, error: (err) => {
        console.error('Error al iniciar sesión: ', err);
        this.mensajeErrorCredenciales = err.error?.mensaje || 'Error al ingresar las credenciales. Por favor intente de nuevo.';
        this.mensajeExitoso = '';
      }
    })
  }

  

}
