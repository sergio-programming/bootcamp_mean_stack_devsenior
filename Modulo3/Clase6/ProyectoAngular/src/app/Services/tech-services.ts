import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechServices {

  constructor() { }

  getTechs() {
    return [
      { nombre: 'Angular', tipo: 'Frontend' },
      { nombre: 'Spring Boot', tipo: 'Backend' },
      { nombre: 'PostgreSQL', tipo: 'Base de Datos' },
      { nombre: 'React', tipo: 'Frontend' },
      { nombre: 'Node.js', tipo: 'Backend' },
      { nombre: 'Django', tipo: 'Backend' },
      { nombre: 'JSF', tipo: 'Backend' },
      { nombre: 'SQLite', tipo: 'Base de Datos' },
      { nombre: 'Laravel', tipo: 'Backend' },
      { nombre: 'MongoDB', tipo: 'Base de Datos' },
      { nombre: 'Vue.js', tipo: 'Frontend' },
      { nombre: 'Bootstrap', tipo: 'Frontend' },
    ];
  }
  

}
