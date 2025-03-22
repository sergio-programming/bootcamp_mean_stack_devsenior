let numero = 1;
while (numero <= 50) {
    if (numero % 2 == 0) {
        let parrafo = document.createElement("p");
        parrafo.textContent = `${numero}`;
        document.getElementById("pares").appendChild(parrafo)
    }
    numero++;
}