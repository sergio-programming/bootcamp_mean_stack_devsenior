import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableUsers } from "./components/table-users/table-users";
import { UsuarioId } from "./components/usuario-id/usuario-id";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableUsers, UsuarioId],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
