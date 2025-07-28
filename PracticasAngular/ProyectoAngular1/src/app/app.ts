import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskInput } from "./components/task-input/task-input";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoAngular1';
}
