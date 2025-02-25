function calcularPrecioConIva(precio: number, iva: number = 0.19) {
    return precio * (1 + iva)
}
let nombre: string = "Sergio";

const precioFinal = calcularPrecioConIva(550000)
console.log(`Señor ${nombre}, el precio con IVA es: $${precioFinal} pesos`)
