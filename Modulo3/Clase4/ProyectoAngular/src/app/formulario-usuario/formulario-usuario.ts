import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css'
})
export class FormularioUsuario {
  public usuario = {
    "nombre": "",
    "correo": ""
  }

  public usuarios: any[] = []
  
  enviar() {
    this.usuarios.push({ ...this.usuario });
    console.log(`Datos enviados: ${this.usuario}`);
    this.usuario = { nombre: '', correo: '' };
  }

}
