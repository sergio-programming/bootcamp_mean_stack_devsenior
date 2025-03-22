//Variables
//Variables var
var nombre = "Sergio"; //Define variables globales (public)
document.getElementById("var").textContent = `var nombre = "${nombre}"`;

//Variables let
let nombre1 = "Valentina"; //Variables que tienen alcance en un bloque de codigo o scope {} Modificador de Acceso (protected-private)
document.getElementById("let").textContent = `let nombre1 = "${nombre1}"`;

//Variables constantes
const pi = 3.14; // Almacenan datos cuyo valor no cambia
document.getElementById("const").textContent = `const pi = ${pi}`;

//Tipos de datos primitivos
let numero = 10; // Number
document.getElementById("number").textContent = `let numero = ${numero}`;
let cadena = "Hola programadores"; // String
document.getElementById("string").textContent = `let cadena = ${cadena}`;
let booleano = true // Boolean
document.getElementById("boolean").textContent = `let booleano = ${booleano}`;
let variableIndefinida // Undefined
document.getElementById("undefined").textContent = `let variableIndefinida = ${variableIndefinida}`;
let variableNula = null // Null
document.getElementById("null").textContent = `let variableNula = ${variableNula}`;

//Operadores aritmeticos
let suma = numero + 5; // +: Operador suma
let resta = numero - 3; // -: Operador resta
let multiplicacion = numero * 4; // *: Operador multiplicacion
let division = numero / 3; // /: Operador division
let residuo = numero % 3; // %: Operador residuo
let potencia = numero ** 2; // **: Operador potenciación

//Operadores de comparación
let num1 = 10;
let num2 = 8;
let num3 = 12;
let num4 = 8;
let num5 = 14;

let comparacion1 = num1 > num2; // >: Mayor que
let comparacion2 = num1 >= num3; // >=: Mayor o igual que
let comparacion3 = num2 < num3; // <: Menor que
let comparacion4 = num3 <= num4; // <=: Menor o igual que
let comparacion5 = num1 == num2; // ==: Igual que
let comparacion6 = num2 == num4; // ==: Igual que
let comparacion7 = num1 != num4; // Diferente que

// Operadores logicos
let conjuncion = comparacion1 && comparacion2;
let disyuncion = comparacion3 || comparacion4;
let negacion = !comparacion7;

//Funciones en Javascript

//Funciones declarativas
function sumar(a, b) {
    return a + b;
}
document.getElementById("function").textContent = `25 + 15 = ${sumar(25, 15)}`;

//Funciones anonimas
const restar = function (a, b) {
    return a - b;
}
document.getElementById("anonima").textContent = `150 - 85 = ${restar(150, 85)}`;

//Funciones Flecha - Arrow functions
let multiplicar = (a, b) => {
    return a * b;
}
document.getElementById("arrow").textContent = `25 X 8 = ${multiplicar(25, 8)}`;

function calcularTotal(subtotal) {
    let iva = subtotal * 0.19;
    let total = subtotal + iva;
    let mensaje = `Subtotal: $${subtotal.toLocaleString()} COP\nIva: $${iva.toLocaleString()} COP\nTotal: $${total.toLocaleString()} COP`
    return mensaje;
}

document.getElementById("mensaje").textContent = calcularTotal(756000);