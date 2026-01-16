import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {

  usuarios: Usuario[] = [
    { id: 1, nombre: 'Ana Torres', email: 'ana.torres@test.com', rol: 'Admin' },
    { id: 2, nombre: 'Carlos López', email: 'carlos.lopez@test.com', rol: 'Usuario' },
    { id: 3, nombre: 'María Gómez', email: 'maria.gomez@test.com', rol: 'Editor' },
    { id: 4, nombre: 'Sergio Pedraza', email: 'sergio.pedraza@test.com', rol: 'Admin' }
  ];
}

