import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, Usuario } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.css'
})
export class InicioComponent {

  usuarioForm: FormGroup;
  loginForm: FormGroup;

  registerMode: boolean = false;
  loginMode: boolean = true;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UserService,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['usuario', [Validators.required]]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getLoginMode() {
    this.loginMode = true;
    this.registerMode = false;
  }

  getRegisterMode() {
    this.registerMode = true;
    this.loginMode = false;
  }

  addUser() {
    if (this.usuarioForm.invalid) {
      // Si el formulario no es válido, marcar todos los campos como tocados
      this.usuarioForm.markAllAsTouched();
      return;
    }

    // Convertir lo datos del formulario en un objeto de tipo Usuario
    const nuevoUsuario = this.usuarioForm.value as Usuario;

    // Llamamos al servicio para agregar el usuario
    this.usuarioService.registerUser(nuevoUsuario).subscribe({
      next: (usuarioAgregado) => {
        alert('Usuario agregado exitosamente');
        this.usuarioForm.reset({ role: 'usuario' });
      },
      error: (err) => {
        console.error('Error al agregar el usuario:', err);
      }
    });

  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.usuarioService.getUser(email).subscribe({
      next: (usuarios) => {
        if (usuarios.length === 0) {
          alert('Usuario no encontrado');
          this.loginForm.reset();
          return;
        }

        const usuario = usuarios[0]

        if (usuario.password === password) {
          alert(`Bienvenido, ${usuario.nombre}!`);
          localStorage.setItem('usuarioEmail', usuario.email)
          this.router.navigate(['/home']);
        } else {
          alert('Contraseña incorrecta');
        }

        this.loginForm.reset();

      }, error: (err) => {
        console.error('Error al buscar el usuario:', err);
      }
    })

  }

}
