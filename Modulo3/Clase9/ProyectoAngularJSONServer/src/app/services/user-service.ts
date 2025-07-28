import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiUrl1 = 'http://localhost:3000/usuarios';

  /**
   * Constructor:
   * Inyectamos HttpClient, el servicio de Angular para hacer peticiones HTTP.
   * Esto nos permite usar métodos como get(), post(), put() y delete().
   */
  constructor (private http: HttpClient) {}

  /**
   * getUsuarios:
   * Realiza una petición GET para obtener una lista de usuarios desde la API.
   * @returns Observable<any[]> -> Observable que emite un arreglo de usuarios.
   */

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1)
  }

  /**
   * crearUsuario:
   * Realiza una petición POST para enviar un nuevo usuario a la API.
   * @param usuario - Objeto con los datos del usuario que queremos crear.
   * @returns Observable<any> -> Observable que emite la respuesta de la API.
   */

  crearUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl1, usuario)
  }


}
