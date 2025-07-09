import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableUsers } from './components/table-users/table-users';
import { TableTechs } from "./components/table-techs/table-techs";
import { TableCourses } from "./components/table-courses/table-courses";
import { NgModelExample } from "./components/ng-model-example/ng-model-example";

@Component({
  selector: 'app-root',
  imports: [TableUsers, TableTechs, TableCourses, NgModelExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoAngular';
}
