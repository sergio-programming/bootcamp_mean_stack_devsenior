function calcularPrecioConIva(precio, iva) {
    if (iva === void 0) { iva = 0.19; }
    return precio * (1 + iva);
}
var nombre = "Sergio";
var precioFinal = calcularPrecioConIva(550000);
console.log("Se\u00F1or ".concat(nombre, ", el precio con IVA es: $").concat(precioFinal, " pesos"));
