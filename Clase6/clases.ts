class Producto {
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }

    public obtenerDetalle(): string {
        return `Producto: ${this.nombre} - Precio: $${this.precio}`;
    }
}

const producto1 = new Producto("Portatil HP 3500", 3450000);
const producto2 = new Producto("Portatil Asus Z5500", 3850000);

console.log(producto1.obtenerDetalle());
console.log(producto2.obtenerDetalle());