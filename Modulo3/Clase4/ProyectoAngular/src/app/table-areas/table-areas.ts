import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-table-areas',
  imports: [CommonModule],
  templateUrl: './table-areas.html',
  styleUrl: './table-areas.css'
})
export class TableAreas {

  areas = [
    {
      id: 1,
      nombre: "Desarrollo de Software",
      descripcion: "Area encargada de crear y mantener aplicaciones"
    },
    {
      id: 2,
      nombre: "Soporte Técnico",
      descripcion: "Área responsable de brindar asistencia a los usuarios y solucionar problemas técnicos"
    },
    {
      id: 3,
      nombre: "Infraestructura",
      descripcion: "Área encargada de administrar servidores, redes y recursos tecnológicos"
    },
    {
      id: 4,
      nombre: "Seguridad Informática",
      descripcion: "Área dedicada a proteger los sistemas y datos contra accesos no autorizados"
    },
    {
      id: 5,
      nombre: "Gestión de Proyectos",
      descripcion: "Área que planifica, organiza y supervisa el desarrollo de proyectos tecnológicos"
    }
  ]

}
