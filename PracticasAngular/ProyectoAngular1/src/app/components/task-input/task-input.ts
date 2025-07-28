import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskServices } from '../../services/task-services'; 
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css'
})
export class TaskInput {

  id: number = 0;
  title: string = "";
  description: string = "";


  constructor (private taskServices: TaskServices) {}
    
    agregarTarea(): void {
      if (this.id && this.title.trim() && this.description.trim()) {
        const nuevaTarea: Task = {
          id: this.id,
          title: this.title,
          description: this.description
        };

        this.taskServices.agregarTarea(nuevaTarea)
        this.id = 0;
        this.title = "";
        this.description = "";

      };
    }

}
