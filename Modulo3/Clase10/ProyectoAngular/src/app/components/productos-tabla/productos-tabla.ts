import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, ProductosService } from '../../services/productos-service';

@Component({
  selector: 'app-productos-tabla',
  imports: [CommonModule],
  templateUrl: './productos-tabla.html',
  styleUrl: './productos-tabla.css'
})
export class ProductosTabla implements OnInit {

  productos: Producto[] = []
  loading = true

  constructor (private productosService: ProductosService) {}

  ngOnInit(): void {
    this.obtenerProductos(); // Carga la lista de productos al iniciar
  }

  obtenerProductos(): void {
    this.loading = true; // Muestra el estado de carga
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;  // Asigna los productos obtenidos al arreglo
        this.loading = false;   // Oculta el estado de carga
      },
      error: (err) => {
        console.error('Error al obtener productos', err);
        this.loading = false;
      }
    });
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este producto?')) {
      this.productosService.deleteProducto(id).subscribe({
        next: () => {
          // Filtra el producto eliminado de la lista local sin recargar la página
          this.productos = this.productos.filter(p => p.id !== id);
        },
        error: (err) => {
          console.error('Error al eliminar producto', err);
        }
      });
    }
  }

  editarProducto(producto: Producto): void {
    // Pide nuevo nombre
    const nuevoNombre = prompt('Nuevo nombre del producto:', producto.nombre);
    if (nuevoNombre === null || nuevoNombre.trim() === '') {
      return; // Usuario canceló o dejó vacío
    }

    // Pide nuevo precio
    const nuevoPrecio = prompt('Nuevo precio:', producto.precio.toString());
    if (nuevoPrecio === null || isNaN(+nuevoPrecio) || +nuevoPrecio <= 0) {
      return; // Usuario canceló o ingresó valor inválido
    }

    // Crea un objeto actualizado con los nuevos datos
    const actualizado: Producto = {
      ...producto,
      nombre: nuevoNombre,
      precio: +nuevoPrecio
    };

    // Llama al servicio para actualizar el producto
    this.productosService.updateProducto(actualizado).subscribe({
      next: () => {
        // Actualiza el producto en el arreglo local para que se vea el cambio
        const index = this.productos.findIndex(p => p.id === producto.id);
        if (index > -1) {
          this.productos[index] = actualizado;
        }
        alert('Producto actualizado con éxito ✅');
      },
      error: (err) => {
        console.error('Error al actualizar producto', err);
      }
    });
  }

}


