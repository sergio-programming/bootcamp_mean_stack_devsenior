import { Component } from '@angular/core';
import { UserService, Usuario } from '../../services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-id',
  imports: [CommonModule],
  templateUrl: './usuario-id.html',
  styleUrl: './usuario-id.css'
})
export class UsuarioId {

  usuario?: Usuario;

  constructor(private usuarioService: UserService) {}

  getUser(id: number) {
    this.usuarioService.getUserById(id).subscribe({
      next: (data) => {
        this.usuario = data;
      },
      error: (err) => {
        alert(`Error al obtener el usuario ${err}`)
      }
    })
  }

}
