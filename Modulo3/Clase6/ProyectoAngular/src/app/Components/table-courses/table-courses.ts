import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../Services/courses-service';

@Component({
  selector: 'app-table-courses',
  imports: [CommonModule],
  templateUrl: './table-courses.html',
  styleUrl: './table-courses.css'
})
export class TableCourses {

  cursos: any[] = []

  constructor(private coursesService: CoursesService) {
    this.cursos = this.coursesService.getCourses()
  }

  obtenerColorPorEstado(activo: boolean): string {
    return activo ? 'green' : 'red';
  }

}
