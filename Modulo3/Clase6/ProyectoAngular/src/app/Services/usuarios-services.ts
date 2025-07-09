import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServices {

  constructor() { }

  obtenerUsuarios() {
    return [
      { nombre: 'Juan Pérez', correo: 'juan.perez@example.com', fechaNacimiento: '1990-05-15', perfil: 'Administrador' },
      { nombre: 'María Gómez', correo: 'maria.gomez@example.com', fechaNacimiento: '1995-08-22', perfil: 'Usuario' },
      { nombre: 'Carlos Ruiz', correo: 'carlos.ruiz@example.com', fechaNacimiento: '1988-11-02', perfil: 'Soporte' },
      { nombre: 'Laura Ramírez', correo: 'laura.ramirez@example.com', fechaNacimiento: '1992-03-18', perfil: 'Desarrollador' },
      { nombre: 'Andrés Torres', correo: 'andres.torres@example.com', fechaNacimiento: '1991-07-09', perfil: 'Diseñador' },
      { nombre: 'Camila Herrera', correo: 'camila.herrera@example.com', fechaNacimiento: '1996-12-01', perfil: 'Analista' },
      { nombre: 'Felipe Mendoza', correo: 'felipe.mendoza@example.com', fechaNacimiento: '1985-10-26', perfil: 'Administrador' },
      { nombre: 'Natalia Rojas', correo: 'natalia.rojas@example.com', fechaNacimiento: '1993-04-13', perfil: 'QA Tester' },
      { nombre: 'Ricardo Salazar', correo: 'ricardo.salazar@example.com', fechaNacimiento: '1987-09-30', perfil: 'Usuario' },
      { nombre: 'Diana Castaño', correo: 'diana.castano@example.com', fechaNacimiento: '1994-11-17', perfil: 'Product Owner' }
    ];
  }
}
