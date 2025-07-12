import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-user',
  imports: [CommonModule, RouterModule],
  templateUrl: './table-user.html',
  styleUrl: './table-user.css'
})
export class TableUser {
  usuarios: any[] = []

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

}
