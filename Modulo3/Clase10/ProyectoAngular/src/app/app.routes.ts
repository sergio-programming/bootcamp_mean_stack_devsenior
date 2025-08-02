import { Routes } from '@angular/router';

import { ProductosComponent } from './components/productos-component/productos-component';
import { ProductosTabla } from './components/productos-tabla/productos-tabla';
import { ProductosForm } from './components/productos-form/productos-form';


export const routes: Routes = [
    { path: '', redirectTo: '/productos-tabla', pathMatch: 'full' },

  // Ruta que muestra la lista de productos estáticos (no desde backend)
  { path: 'productos', component: ProductosComponent },

  // Ruta que muestra el formulario reactivo para agregar productos
  { path: 'productos-form', component: ProductosForm },

  // Ruta que muestra los productos en formato de tabla (CRUD)
  { path: 'productos-tabla', component: ProductosTabla }
];
