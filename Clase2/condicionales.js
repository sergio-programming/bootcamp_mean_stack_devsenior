let numero1 = parseInt(prompt("Por favor ingrese el primer número: "));
let numero2 = parseInt(prompt("Por favor ingrese el segundo número: "));
let numero3 = parseInt(prompt("Por favor ingrese el tercer número: "));

if (numero1 > numero2 && numero2 > numero3) {
    document.getElementById("resultado").textContent = `Número mayor: ${numero1} // Número intermedio: ${numero2} // Número menor: ${numero3}`;
} else if (numero1 > numero3 && numero3 > numero2) {
    document.getElementById("resultado").textContent = `Número mayor: ${numero1} // Número intermedio: ${numero3} // Número menor: ${numero2}`;
} else if (numero2 > numero1 && numero1 > numero3) {
    document.getElementById("resultado").textContent = `Número mayor: ${numero2} // Número intermedio: ${numero1} // Número menor: ${numero3}`;
} else if (numero2 > numero3 && numero3 > numero1) {
    document.getElementById("resultado").textContent = `Número mayor: ${numero2} // Número intermedio: ${numero3} // Número menor: ${numero1}`;
} else if (numero3 > numero1 && numero1 > numero2) {
    document.getElementById("resultado").textContent = `Número mayor: ${numero3} // Número intermedio: ${numero1} // Número menor: ${numero2}`;
} else if (numero3 > numero2 && numero2 > numero1) {
    document.getElementById("resultado").textContent = `Número mayor: ${numero3} // Número intermedio: ${numero2} // Número menor: ${numero1}`;
} else if (numero1 == numero2 && numero1 != numero3) {
    document.getElementById("resultado").textContent = `Números iguales: ${numero1} = ${numero2} // Número diferente: ${numero3}`;
} else if (numero1 == numero3 && numero1 != numero2) {
    document.getElementById("resultado").textContent = `Números iguales: ${numero1} = ${numero3} // Número diferente: ${numero2}`;
} else if (numero2 == numero3 && numero2 != numero1) {
    document.getElementById("resultado").textContent = `Números iguales: ${numero2} = ${numero3} // Número diferente: ${numero1}`;
} else {
    document.getElementById("resultado").textContent = `Los tres números son iguales: ${numero1} = ${numero2} = ${numero3}`;
}