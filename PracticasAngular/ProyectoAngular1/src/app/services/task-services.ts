import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServices {

  constructor () {}

  agregarTarea(tarea: Task): void {
    const tareas = this.obtenerTareas();
    tareas.push(tarea)
    this.guardarTareas(tareas)
  }

  obtenerTareas(): Task[] {
    const tareasString = localStorage.getItem('tareas');
    return tareasString ? JSON.parse(tareasString) : [];
  }

  guardarTareas(tareas: Task[]) {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }

  eliminarTareas(id: number): void {
    let tareas = this.obtenerTareas();
    tareas = tareas.filter(t => t.id !== id)
    this.guardarTareas(tareas)
  }
    
}
