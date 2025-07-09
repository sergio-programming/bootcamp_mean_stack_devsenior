import { Component } from '@angular/core';
import { TableUsers } from "./table-users/table-users";
import { TableAreas } from "./table-areas/table-areas";
import { FormularioUsuario } from './formulario-usuario/formulario-usuario';  

@Component({
  selector: 'app-root',
  imports: [TableUsers, TableAreas, FormularioUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'proyectoangular';
}
