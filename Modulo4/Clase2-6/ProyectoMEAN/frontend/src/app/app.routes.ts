import { Routes } from '@angular/router';
import { authGuard } from './auth/auth-guard';

// Componentes
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';
import { AllSucursalesComponent } from './components/all-sucursales-component/all-sucursales-component';
import { GetSucursal } from './components/get-sucursal/get-sucursal';
import { DeleteSucursal } from './components/delete-sucursal/delete-sucursal';
import { CreateSucursal } from './components/create-sucursal/create-sucursal';
import { UpdateSucursal } from './components/update-sucursal/update-sucursal';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
        // Protegida por el guard, solo accesible si hay token
        children: [
            { path: 'sucursales', component: AllSucursalesComponent },
            { path: 'sucursal', component: GetSucursal },
            { path: 'eliminarSucursal', component: DeleteSucursal },
            { path: 'crearSucursal', component: CreateSucursal },
            { path: 'actualizarSucursal', component: UpdateSucursal }
        ]
    }
    
];
