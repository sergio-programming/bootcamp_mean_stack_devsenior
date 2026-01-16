import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor (private http: HttpClient) {}

  // Método para iniciar sesión
  // credentials: objeto con email y password
  // Retorna un Observable con la respuesta del backend
  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        // Una vez recibida la respuesta, guardamos el token JWT en el localStorage
        localStorage.setItem('token', response.token);
      })
    );
  }

  // Método para cerrar sesión: elimina el token del localStorage
  logout(): void {
    localStorage.removeItem('token');
  }

  // Método para obtener el token almacenado
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para verificar si el usuario está autenticado
  // Devuelve true si existe un token guardado, false si no
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  
}
