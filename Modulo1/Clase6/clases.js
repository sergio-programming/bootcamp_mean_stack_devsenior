var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.obtenerDetalle = function () {
        return "Producto: ".concat(this.nombre, " - Precio: $").concat(this.precio);
    };
    return Producto;
}());
var producto1 = new Producto("Portatil HP 3500", 3450000);
var producto2 = new Producto("Portatil Asus Z5500", 3850000);
console.log(producto1.obtenerDetalle());
console.log(producto2.obtenerDetalle());
