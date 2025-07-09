import { Component } from '@angular/core';
import { SaludoService } from '../../Services/saludo-service';

@Component({
  selector: 'app-saludo-component',
  imports: [],
  templateUrl: './saludo-component.html',
  styleUrl: './saludo-component.css'
})
export class SaludoComponent {

  // Variable pública que almacena el mensaje generado por el servicio.
  mensaje: string;

  constructor(private saludoService: SaludoService) {
    this.mensaje = this.saludoService.obtenerSaludo('Sergio Pedraza')
  }

}
