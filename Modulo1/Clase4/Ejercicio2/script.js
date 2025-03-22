function cambiarContenido() {
    const div = document.getElementById("miDiv");
    div.innerHTML = "<h2> Este es el nuevo contenido de la pagina </h2>"
    div.firstElementChild.style.color = "red";
}