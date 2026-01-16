import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { RegistroComponent } from './components/registro-component/registro-component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige al login por defecto
    { path: '**', redirectTo: 'login' } // Cualquier ruta no encontrada redirige al login
];
