import { Component, OnInit } from '@angular/core';
import { SucursalesServices, Sucursal } from '../../services/sucursales-services';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-sucursal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-sucursal.html',
  styleUrl: './update-sucursal.css'
})
export class UpdateSucursal implements OnInit {

  idForm: FormGroup;
  updateSucursalForm: FormGroup;
  
  idSucursal: string = '';
  sucursal?: Sucursal;
  mensajeError: string | null = null;


  idMode: boolean = true;
  updateMode: boolean = false;


  ngOnInit(): void {}

  constructor(
    private sucursalService: SucursalesServices,
    private fb: FormBuilder
  ) {

    this.idForm = this.fb.group ({
      id: ['', [Validators.required]]
    })

    this.updateSucursalForm = this.fb.group ({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estado: ['activa', [Validators.required, Validators.pattern(/^(activa|inactiva)$/)]]
    })
  }

  validarSucursal(_id: string) {
    this.sucursalService.getSucursalById(_id).subscribe({
      next: (data) => {
        this.sucursal = data

        if (this.sucursal) {
          this.idSucursal = this.sucursal._id
          this.mensajeError = null;
          this.idForm.reset();
          this.idMode = false;
          this.updateMode = true
        }

      },
      error: (err) => {
        this.mensajeError = 'Error al obtener la sucursal. Por favor intente de nuevo';
        this.idForm.reset();
        console.error('Error al obtener la sucursal ', err);
      }
    })


  };

  actualizarSucursal() {
    if (this.updateSucursalForm.invalid) {
      this.updateSucursalForm.markAllAsTouched();
      alert('No se han cumplido las condiciones del formulario para actualizar la sucursal');
      return;
    }

    const sucursalActualizada: Partial<Sucursal> = this.updateSucursalForm.value;

      this.sucursalService.updateSucursal(this.idSucursal, sucursalActualizada).subscribe({
        next: (data) => {
          alert('Sucursal actualizada exitosamente');
          this.updateSucursalForm.reset();
          this.idMode = true;
          this.updateMode = false;
        },
        error: (err) => {
          alert('Error al actualizar la sucursal');
          this.idMode = true;
          this.updateMode = false;
          console.error('Error al actualizar la sucursal ', err);
        }
      })

  }

}
