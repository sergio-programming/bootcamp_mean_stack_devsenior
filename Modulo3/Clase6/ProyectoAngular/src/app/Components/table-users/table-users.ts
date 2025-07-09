import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosServices } from '../../Services/usuarios-services';

@Component({
  selector: 'app-table-users',
  imports: [CommonModule],
  templateUrl: './table-users.html',
  styleUrl: './table-users.css'
})
export class TableUsers {

  usuarios: any[] = []

  constructor(private usuariosServices: UsuariosServices) {
    this.usuarios = this.usuariosServices.obtenerUsuarios();
  }

}
