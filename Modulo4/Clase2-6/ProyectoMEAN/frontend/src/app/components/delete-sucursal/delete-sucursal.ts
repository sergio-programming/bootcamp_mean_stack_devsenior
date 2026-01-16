import { Component, OnInit } from '@angular/core';
import { SucursalesServices, Sucursal } from '../../services/sucursales-services';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-sucursal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './delete-sucursal.html',
  styleUrl: './delete-sucursal.css'
})
export class DeleteSucursal implements OnInit {

  idForm: FormGroup;

  constructor(
    private sucursalService: SucursalesServices,
    private fb: FormBuilder
  ) {
    this.idForm = this.fb.group({
      id: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  eliminarSucursal(_id: string): void {
    if (this.idForm.invalid) {
      this.idForm.markAllAsTouched();
      alert('No se ha cumplido con las condiciones del campo requerido');
      return;
    }

    this.sucursalService.deleteSucursal(_id).subscribe({
      next: (res) => {
        console.log(res.mensaje);
        alert(res.mensaje);
      }, 
      error: (err) => {
        console.error('Error al eliminar la sucursal ', err);
        
      }
    });

  }

}
