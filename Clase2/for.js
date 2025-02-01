numero = parseInt(prompt("Por favor ingrese un número para ver su tabla de multplicar: "));

if (numero > 0) {
    for (i = 1; i < 11; i++) {
        let parrafo = document.createElement("p");
        parrafo.textContent = `${numero} X ${i} = ${numero*i}`;
        document.getElementById("tabla").appendChild(parrafo);
    }
} else {
    let parrafo = document.createElement("p");
    parrafo.textContent = `El número ingresado no es valido`;
    document,getElementById("tabla").appendChild(parrafo);
}