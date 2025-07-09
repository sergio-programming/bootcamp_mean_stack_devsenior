import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor() { }

  obtenerSaludo(nombre: string): string {
    return `Hola, ${nombre}! Bienvenido a la generación de servicios desde Angular.`;
  }

}
