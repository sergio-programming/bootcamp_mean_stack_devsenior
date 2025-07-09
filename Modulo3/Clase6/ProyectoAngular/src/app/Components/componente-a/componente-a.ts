import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeService } from '../../Services/mensaje-service';

@Component({
  selector: 'app-componente-a',
  imports: [FormsModule],
  templateUrl: './componente-a.html',
  styleUrl: './componente-a.css'
})
export class ComponenteA {

  nuevoMensaje = "";

  constructor(private mensajeService: MensajeService) {}

    enviarMensaje() {
      this.mensajeService.setMensaje(this.nuevoMensaje)
    }

  

}
