import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  imports: [CommonModule],
  templateUrl: './detalle-usuario.html',
  styleUrl: './detalle-usuario.css'
})
export class DetalleUsuario {

  usuario: any;

  // Constructor que inyecta las dependencias necesarias:
  // - ActivatedRoute para acceder al parámetro de la URL
  // - UsuariosService para obtener la lista de usuarios
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    // Se suscribe a los cambios del parámetro de la URL (correo)
    // Esto asegura que si el usuario cambia en la misma vista, se actualice sin necesidad de recargar
    this.route.paramMap.subscribe((params) => {
      const correo = params.get('correo'); 
      this.usuario = this.usuarioService.obtenerUsuarios().find((u) => u.correo === correo)
    });
  }
}
