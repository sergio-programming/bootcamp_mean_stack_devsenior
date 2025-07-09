import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensaje = "Mensaje Inicial";

  constructor() { }

  setMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }

  getMensaje(): string {
    return this.mensaje
  }

}
