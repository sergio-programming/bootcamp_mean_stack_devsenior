import { Component, OnInit } from '@angular/core';
import { SucursalesServices, Sucursal } from '../../services/sucursales-services';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-sucursal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './get-sucursal.html',
  styleUrl: './get-sucursal.css'
})
export class GetSucursal implements OnInit {

  sucursal?: Sucursal;
  idForm: FormGroup;
  mensajeNoEcontrado: string | null = null;

  constructor(
    private sucursalService: SucursalesServices,
    private fb: FormBuilder
  ) {
    this.idForm = this.fb.group({
      id: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  mostrarSucursal(_id: string): void {
    this.sucursalService.getSucursalById(_id).subscribe({
      next: (data) => {
        this.sucursal = data;
        this.mensajeNoEcontrado = null;
      },
      error: (err) => {
        this.mensajeNoEcontrado = `La sucursal con id ${_id} no esta registrada`;
        console.error('Error al obtener la sucursal ', err);
      }
    });
  };

}
