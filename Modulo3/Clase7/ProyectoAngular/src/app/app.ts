import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TableUser } from "./components/table-user/table-user";
import { DetalleUsuario } from "./components/detalle-usuario/detalle-usuario";

@Component({
  selector: 'app-root',
  imports: [RouterModule, TableUser, DetalleUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoAngular';

  constructor (private router: Router) { }

  irAPagina(pagina: String) {
    this.router.navigate([pagina]);
  }
}
