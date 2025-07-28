import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos OnInit para implementar el ciclo de vida de Angular (ngOnInit)
import { OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-component',
  imports: [CommonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent implements OnInit {

  usuarios: any[] = []

  constructor (private usuarioService: UserService) {}

  /**
   * ngOnInit:
   * Método del ciclo de vida de Angular.
   * Se ejecuta automáticamente cuando el componente ha sido inicializado.
   * Aquí hacemos una llamada al servicio para obtener los datos de usuarios.
   */

  ngOnInit() {
    // Suscripción al observable retornado por getUsuarios().
    // Cuando el observable emite datos (data), los asignamos a la variable usuarios.
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data
    })      
  }

}
