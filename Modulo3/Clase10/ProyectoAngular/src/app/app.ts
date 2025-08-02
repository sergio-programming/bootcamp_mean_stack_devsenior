import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from "./components/productos-component/productos-component";
import { ProductosTabla } from "./components/productos-tabla/productos-tabla";
import { ProductosForm } from "./components/productos-form/productos-form";
import { Menu } from "./components/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductosComponent, ProductosTabla, ProductosForm, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoAngular';
}
