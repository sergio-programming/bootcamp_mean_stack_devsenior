import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-users',
  imports: [CommonModule],
  templateUrl: './table-users.html',
  styleUrl: './table-users.css'
})
export class TableUsers {
  usuarios = [
    {
      nombre: "Sergio Pedraza",
      correo: "spedraza@email.com",
      fechaNacimiento: "1988-10-03",
      perfil: "Administrador"
    },
    {
    nombre: "Laura Gómez",
    correo: "lgomez@email.com",
    fechaNacimiento: "1992-06-15",
    perfil: "Usuario"
  },
  {
    nombre: "Carlos Ramírez",
    correo: "cramirez@email.com",
    fechaNacimiento: "1985-03-22",
    perfil: "Administrador"
  },
  {
    nombre: "Mariana Torres",
    correo: "mtorres@email.com",
    fechaNacimiento: "1990-11-09",
    perfil: "Editor"
  },
  {
    nombre: "Andrés Molina",
    correo: "amolina@email.com",
    fechaNacimiento: "1995-01-28",
    perfil: "Usuario"
  },
  {
    nombre: "Valentina Ruiz",
    correo: "vruiz@email.com",
    fechaNacimiento: "1989-07-05",
    perfil: "Administrador"
  }
  ]
}
