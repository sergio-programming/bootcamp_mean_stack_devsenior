import { Component, OnInit } from '@angular/core';
import { SucursalesServices, Sucursal } from '../../services/sucursales-services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-sucursales-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './all-sucursales-component.html',
  styleUrl: './all-sucursales-component.css'
})
export class AllSucursalesComponent implements OnInit {

  sucursales: Sucursal[] = [];
  updateSucursalForm: FormGroup;

  constructor (
    private sucursalesServices: SucursalesServices,
    private fb: FormBuilder
  ) {
    this.updateSucursalForm = this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estado: ['activa', [Validators.required, Validators.pattern(/^(activa|inactiva)$/)]]
    })
  }

  // Se ejecuta al cargar el componente

  ngOnInit(): void {
    this.mostrarSucursales();
  }

  mostrarSucursales(): void {
    this.sucursalesServices.getSucursales().subscribe({
      next: (data) => (this.sucursales = data),
      error: (err) => console.error('Error al mostrar sucursales:', err),
    })
  }

  actualizarSucursal(): void {
    
  }

  eliminarSucursal(_id: string): void {

    if (confirm('¿Estas seguro de eliminar esta sucursal?')) {
      this.sucursalesServices.deleteSucursal(_id).subscribe({
        next: (res) => {
          console.log(res.mensaje);
          alert(res.mensaje);
          this.mostrarSucursales();
          
        }, error: (err) => {
          console.error('Error al eliminar la sucursal ', err);
        }
      })
    }
    
  }


}
