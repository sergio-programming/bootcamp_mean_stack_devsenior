import { Component } from '@angular/core';
import { MensajeService } from '../../Services/mensaje-service';

@Component({
  selector: 'app-componente-b',
  imports: [],
  templateUrl: './componente-b.html',
  styleUrl: './componente-b.css'
})
export class ComponenteB {

  mensaje = "";

  constructor(private mensajeService: MensajeService) {}

  actualizarVista() {
    this.mensaje = this.mensajeService.getMensaje();
  }

}
