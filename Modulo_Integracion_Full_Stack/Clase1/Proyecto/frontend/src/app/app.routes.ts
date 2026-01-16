import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'incidentes',
    loadChildren: () =>
      import('./features/incidents/incident.routes')
        .then(m => m.IncidentRoutes),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./features/users/user.routes')
        .then(m => m.UserRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'incidentes',
  },
  {
    path: '**',
    redirectTo: 'incidentes',
  },
];

