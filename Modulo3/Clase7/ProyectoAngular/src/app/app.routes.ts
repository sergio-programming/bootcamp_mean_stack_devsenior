import { Routes } from '@angular/router';

import { Page01 } from './components/page01/page01';
import { Page02 } from './components/page02/page02';
import { Page03 } from './components/page03/page03';
import { TableUser } from './components/table-user/table-user';
import { DetalleUsuario } from './components/detalle-usuario/detalle-usuario';

export const routes: Routes = [
    //Ruta raiz ('') que carga por defecto el componente Page01
    { path: '', component: Page01 },
    { path: 'tableuser', component: TableUser },

    //Ruta explicita  'page01' que tambien carga el componente Page01
    { path: 'page01', component: Page01 },

    // Ruta 'page02' que carga el componente Page02
  { path: 'page02', component: Page02 },

  // Ruta 'page03' que carga el componente Page03
  { path: 'page03', component: Page03 },
  { path: 'usuario/:correo', component: DetalleUsuario }

];
