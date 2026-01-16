import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definimos la interfaz Usuario para tipar los datos que recibiremos del backend
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  genero: 'Masculino' | 'Femenino' | string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000';

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }

  getUserById(id: number): Observable<Usuario> {
  return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${id}`);
}

}
