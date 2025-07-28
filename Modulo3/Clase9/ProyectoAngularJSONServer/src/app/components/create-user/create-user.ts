import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {

  /**
   * Objeto newUser:
   * Modelo de datos enlazado con el formulario.
   * name y email se llenarán con ngModel desde los inputs del formulario.
   */
  newUser = {
    name: "",
    username: "",
    email: ""
  };

  constructor (private userService: UserService) {}
    /**
    * Método createUser():
    * Se ejecuta al enviar el formulario.
    * - Verifica que los campos no estén vacíos.
    * - Envía una solicitud POST al servidor con los datos del nuevo usuario.
    * - Muestra mensaje de éxito o error.
    */
    createUser() {
      if (!this.newUser.name || !this.newUser.username || !this.newUser.email) {
        alert("Todos los campos son obligatorios");
        return;
      }

      this.userService.crearUsuario(this.newUser).subscribe({
        //Si la respuesta es exitosa
        next: (response) => {
          alert("Usuario creado exitosamente");
          console.log(`Respuesta del servidor:  ${response}`);
          // Limpiamos el formulario
          this.newUser = { name: "", username: "", email: "" }
        },
        error: (err) => {
          console.error(`Error al crear el usuario: ${err}`);
          
        }
      });

    }

  }


