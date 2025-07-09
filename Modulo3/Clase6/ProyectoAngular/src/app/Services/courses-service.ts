import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [
      { nombre: 'Introducción a Angular', duracion: '20 horas', activo: true },
      { nombre: 'Spring Boot API REST', duracion: '30 horas', activo: true },
      { nombre: 'SQL Server Avanzado', duracion: '15 horas', activo: false },
      { nombre: 'React + Firebase', duracion: '25 horas', activo: true },
      { nombre: 'Fundamentos de DevOps', duracion: '10 horas', activo: false },
      { nombre: 'Git y GitHub para desarrolladores', duracion: '12 horas', activo: true },
      { nombre: 'Diseño de Interfaces con Figma', duracion: '18 horas', activo: true },
      { nombre: 'Python para Ciencia de Datos', duracion: '35 horas', activo: false }
    ];
  }
}
