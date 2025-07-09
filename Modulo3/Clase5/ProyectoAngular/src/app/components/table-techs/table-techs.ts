import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-techs',
  imports: [CommonModule],
  templateUrl: './table-techs.html',
  styleUrl: './table-techs.css'
})
export class TableTechs {
  tecnologias = [
  { nombre: "Angular", tipo: "Frontend" },
  { nombre: "React", tipo: "Frontend" },
  { nombre: "Vue.js", tipo: "Frontend" },
  { nombre: "HTML", tipo: "Frontend" },
  { nombre: "CSS", tipo: "Frontend" },
  { nombre: "JavaScript", tipo: "Frontend" },

  { nombre: "SpringBoot", tipo: "Backend" },
  { nombre: "Node.js", tipo: "Backend" },
  { nombre: "Django", tipo: "Backend" },
  { nombre: "Flask", tipo: "Backend" },
  { nombre: "Express", tipo: "Backend" },

  { nombre: "MySQL", tipo: "Base de datos" },
  { nombre: "PostgreSQL", tipo: "Base de datos" },
  { nombre: "MongoDB", tipo: "Base de datos" },
  { nombre: "SQLite", tipo: "Base de datos" },

  { nombre: "Git", tipo: "Herramienta" },
  { nombre: "Docker", tipo: "Herramienta" },
  { nombre: "Kubernetes", tipo: "Herramienta" },
  { nombre: "Webpack", tipo: "Herramienta" },
  { nombre: "Jenkins", tipo: "Herramienta" }
]


}
