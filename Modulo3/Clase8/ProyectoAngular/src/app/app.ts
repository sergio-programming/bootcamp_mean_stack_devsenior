import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploFormComponent } from "./components/ejemplo-form-component/ejemplo-form-component";
import { FormularioSimpleComponent } from "./components/formulario-simple-component/formulario-simple-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EjemploFormComponent, FormularioSimpleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoAngular';
}
