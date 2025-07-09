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
    {"id": 1, "nombre": "Sergio Pedraza", "correo": "spedraza@email.com"},
    {"id": 2, "nombre": "Natalia Gomez", "correo": "ngomez@email.com"},
    {"id": 3, "nombre": "Brayan Rodriguez", "correo": "brodriguez@email.com"},
    {"id": 4, "nombre": "Andrea Benavides", "correo": "abenavides@email.com"},
    {"id": 5, "nombre": "Jainer Diaz", "correo": "jdiaz@email.com"}
  ]

}
