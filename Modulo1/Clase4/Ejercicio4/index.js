function botonClickeado() {
    let boton = document.querySelector("#myButton")

    boton.addEventListener("click", function () {
        alert("El boton fue clickeado");
    });
}