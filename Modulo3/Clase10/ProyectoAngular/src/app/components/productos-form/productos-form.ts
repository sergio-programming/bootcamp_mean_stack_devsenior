import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Para formularios reactivos
import { ProductosService, Producto } from '../../services/productos-service';     // Servicio e interfaz de producto
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-productos-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './productos-form.html',
  styleUrl: './productos-form.css'
})
export class ProductosForm {

  @Output() productoAgregado = new EventEmitter<Producto>();

  productoForm: FormGroup;

  constructor (
    private fb: FormBuilder,
    private productoService: ProductosService
  ) {
    // Inicializar el formulario reactivo con valores por defecto y validaciones
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required]], //Obligatorio
      descripcion: ['', [Validators.required]], // Obligatorio
      precio: [0, [Validators.required, Validators.min(1)]], // Obligatorio y mayor a cero
      stock: [0, [Validators.required, Validators.min(0)]], // Obligatorio y no acepta negativos
      imagen: [
        'https://img.freepik.com/free-vector/red-product-sale-tags_78370-1272.jpg',
        Validators.required
      ], // Obligatorio, con URL por defecto
      enlace: ['', Validators.required] // Obligatorio
    });

  }

  // Metodo para agregar productos
  agregarProducto() {
    // Si el formulario no es válido, marcar todos los campos como tocados
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    // Convertir los datos del formulario a un objeto Producto
    const nuevoProducto = this.productoForm.value as Producto;

    // Llamamos al servicio para agregar el producto
    this.productoService.addProducto(nuevoProducto).subscribe({
      next: (productoAgregado) => {
        alert('Producto agregado con exito ✅');

        // Reiniciar formulario con valores por defecto para precio y stock
        this.productoForm.reset({ precio: 0, stock: 0 });
      }, 
      error: (err) => {
        console.error('Error al agregar el producto', err)
      }
    })


  }

}
