var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario, departamento) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    }
    Empleado.prototype.calcularBono = function () {
        return this.salario * 0.1;
    };
    Empleado.prototype.obtenerInformacion = function () {
        return "Empleado: ".concat(this.nombre, "\n        Departamento: ").concat(this.departamento, "\n        Salario: $").concat(this.salario.toFixed(2), "\n        Bono Calculado: $").concat(this.calcularBono().toFixed(2));
    };
    return Empleado;
}());
var empleados = [
    new Empleado("Sergio Pedraza", 2106500, "Compras y Logistica"),
    new Empleado("Luisa Rojas", 2910800, "Tesoreria"),
    new Empleado("Lennys Castellanos", 2750000, "Credito y Cartera"),
    new Empleado("Felipe Ostos", 3650900, "Sistemas"),
    new Empleado("Jorge Diaz", 3750000, "Desarrollo Humano"),
    new Empleado("Sebastian Garcia", 2450000, "Contabilidad"),
    new Empleado("Carolina Sanchez", 3230000, "Mercadeo")
];
function renderizarEmpleados() {
    var listaEmpleados = document.getElementById("employee-list");
    if (!listaEmpleados) {
        console.error("No se encontro registros en la lista de empleados");
        return;
    }
    listaEmpleados.innerHTML = "";
    empleados.forEach(function (empleado) {
        var empleadoElemento = document.createElement("div");
        empleadoElemento.className = "employee-card";
        empleadoElemento.innerHTML = "\n        <h3>".concat(empleado.nombre, "</h3>\n        <p><strong>Area: </strong>").concat(empleado.departamento, "</p>\n        <p><strong>Salario: </strong>$").concat(empleado.salario, " pesos</p>\n        <p><strong>Bono Calculado: </strong>").concat(empleado.calcularBono(), "</p>\n        ");
        listaEmpleados.appendChild(empleadoElemento);
    });
}
document.addEventListener("DOMContentLoaded", renderizarEmpleados);
