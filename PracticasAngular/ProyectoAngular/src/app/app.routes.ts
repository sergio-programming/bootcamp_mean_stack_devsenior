import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio-component/inicio-component';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
    // Ruta inicio de sesión y registro
    { path: '', component: InicioComponent },

    // Ruta de inicio
    { path: 'home', component: HomeComponent }
];
