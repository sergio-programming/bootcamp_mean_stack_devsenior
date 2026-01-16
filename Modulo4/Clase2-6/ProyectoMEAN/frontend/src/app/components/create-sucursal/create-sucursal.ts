import { Component, OnInit } from '@angular/core';
import { SucursalesServices, SucursalCreate } from '../../services/sucursales-services';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-sucursal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-sucursal.html',
  styleUrl: './create-sucursal.css'
})
export class CreateSucursal implements OnInit {

  createSucursalForm: FormGroup;

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor (
    private fb: FormBuilder,
    private sucursalService: SucursalesServices
  ) {
    this.createSucursalForm = this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estado: ['activa', [Validators.required, Validators.pattern(/^(activa|inactiva)$/)]]
    })
  }

  ngOnInit(): void {}

  crearSucursal() {
    if (this.createSucursalForm.invalid) {
      this.createSucursalForm.markAllAsTouched();
      alert('No se han cumplido las condiciones del formulario para crear la sucursal');
      return;
    }

    const nuevaSucursal = this.createSucursalForm.value as SucursalCreate;

    this.sucursalService.createSucursal(nuevaSucursal).subscribe({
      next: (data) => {
        alert(`Sucursal ${data.nombre} creada exitosamente`);
        this.mensajeExito = `Sucursal ${data.nombre} creada exitosamente`;
        this.mensajeError = null;
        this.createSucursalForm.reset({ estado: 'activa' });
      },
      error: (err) => {
        console.error('Error al crear la sucursal ', err);
        this.mensajeError = 'Error al crear la sucursal. Por favor intente de nuevo.';
        this.mensajeExito = null;
      }
    });

  };

}
