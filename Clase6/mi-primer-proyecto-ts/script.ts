class Empleado {
    constructor(
        public nombre: string,
        public salario: number,
        public departamento: string
    ) {}

    public calcularBono(): number {
        return this.salario * 0.1
    }

    public obtenerInformacion(): string {
        return `Empleado: ${this.nombre}
        Departamento: ${this.departamento}
        Salario: $${this.salario.toFixed(2)}
        Bono Calculado: $${this.calcularBono().toFixed(2)}`;
    }

}

const empleados: Empleado[] = [
    new Empleado("Sergio Pedraza", 2106500, "Compras y Logistica"),
    new Empleado("Luisa Rojas", 2910800, "Tesoreria"),
    new Empleado("Lennys Castellanos", 2750000, "Credito y Cartera"),
    new Empleado("Felipe Ostos", 3650900, "Sistemas"),
    new Empleado("Jorge Diaz", 3750000, "Desarrollo Humano"),
    new Empleado("Sebastian Garcia", 2450000, "Contabilidad"),
    new Empleado("Carolina Sanchez", 3230000, "Mercadeo")
];

function renderizarEmpleados(): void {
    const listaEmpleados = document.getElementById("employee-list")

    if (!listaEmpleados) {
        console.error("No se encontro registros en la lista de empleados");
        return;
    }

    listaEmpleados.innerHTML = "";

    empleados.forEach((empleado) => {
        const empleadoElemento = document.createElement("div")

        empleadoElemento.className = "employee-card";
        empleadoElemento.innerHTML = `
        <h3>${empleado.nombre}</h3>
        <p><strong>Area: </strong>${empleado.departamento}</p>
        <p><strong>Salario: </strong>$${empleado.salario} pesos</p>
        <p><strong>Bono Calculado: </strong>${empleado.calcularBono()}</p>
        `;
        listaEmpleados.appendChild(empleadoElemento);    
    });
}

document.addEventListener("DOMContentLoaded", renderizarEmpleados);