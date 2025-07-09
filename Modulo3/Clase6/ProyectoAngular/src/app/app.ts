import { Component } from '@angular/core';
import { SaludoComponent } from "./Components/saludo-component/saludo-component";
import { TableUsers } from "./Components/table-users/table-users";
import { TableCourses } from "./Components/table-courses/table-courses";
import { TableTechs } from "./Components/table-techs/table-techs";
import { ComponenteA } from "./Components/componente-a/componente-a";
import { ComponenteB } from './Components/componente-b/componente-b';


@Component({
  selector: 'app-root',
  imports: [SaludoComponent, TableUsers, TableCourses, TableTechs, ComponenteA, ComponenteB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoAngular';
}
