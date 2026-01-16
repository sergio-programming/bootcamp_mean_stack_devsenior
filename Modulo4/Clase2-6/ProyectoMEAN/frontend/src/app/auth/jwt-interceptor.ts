import { HttpInterceptorFn } from '@angular/common/http';
import { AuthServices } from '../services/auth-services';
import { inject } from '@angular/core';


export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  // Inyectamos AuthService para acceder al token almacenado
  const authService = inject(AuthServices);

  // Obtenemos el token desde localStorage (a través del servicio)
  const token = authService.getToken();

  // Si existe token, clonamos la request y le agregamos el header Authorization
  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` } // <-- aquí se añade el JWT
    });
    return next(cloned); // enviamos la petición modificada
  }

  // Si no hay token, dejamos pasar la request original sin modificar
  return next(req);
};
