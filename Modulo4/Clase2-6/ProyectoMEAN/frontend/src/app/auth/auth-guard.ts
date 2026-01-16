import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServices } from '../services/auth-services';

export const authGuard: CanActivateFn = (route, state) => {

  // Inyectamos el servicio para saber si el usuario esta autenticado
  const authService = inject(AuthServices)

  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }else {
    // Si no tiene token, lo redirigimos a la pagina de login
    router.navigate(['/login']);
    return false;
  }


  
};
