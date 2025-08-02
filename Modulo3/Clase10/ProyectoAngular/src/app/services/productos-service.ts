import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;           // Identificador único del producto
  nombre: string;       // Nombre del producto
  descripcion: string;  // Descripción breve
  precio: number;       // Precio en formato numérico
  stock: number;        // Cantidad disponible
  imagen: string;       // URL de imagen del producto
  enlace: string;       // URL para más información o compra
}


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:3000/Productos';
  
  // Constructor que recibe el HttpClient por inyección de dependencias.
  // Esto permite usar http para hacer solicitudes GET, POST, PUT, DELETE.
  constructor (private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto)
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${producto.id}`, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
