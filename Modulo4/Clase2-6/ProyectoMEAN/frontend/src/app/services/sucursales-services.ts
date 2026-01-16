import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetSucursal } from '../components/get-sucursal/get-sucursal';

export interface Sucursal {
  _id: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  estado: 'activa' | 'inactiva';
  createdAt: string;
}

export interface SucursalCreate {
  nombre: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  estado: 'activa' | 'inactiva';
}

@Injectable({
  providedIn: 'root'
})
export class SucursalesServices {

  private baseUrl = 'http://localhost:3000/api/sucursales';

  constructor(private http: HttpClient) {}

  getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.baseUrl);
  }

  getSucursalById(_id: string): Observable<Sucursal> {
    return this.http.get<Sucursal>(`${this.baseUrl}/${_id}`);
  }

  createSucursal(sucursal: SucursalCreate): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.baseUrl, sucursal);
  }

  updateSucursal(_id: string, sucursal: Partial<Sucursal>): Observable<Sucursal> {
    return this.http.put<Sucursal>(`${this.baseUrl}/${_id}`, sucursal);
  }


  deleteSucursal(_id: string): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.baseUrl}/${_id}`);
  }
  
}
