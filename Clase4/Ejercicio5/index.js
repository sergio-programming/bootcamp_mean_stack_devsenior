/*
Desarrollar la siguiente web a partir de la siguiente descripcion:
1. Encabezado y un parrafo.
2. Un boton que al hacer clic cambie el color del fondo de la pagina.
3. Un campo de texto donde el usuario pueda escribir al presionar <Enter> se agregue una lista de elementos.
4. Un boton que permita eliminar el ultimo elemento de la lista.
*/

document.getElementById("cambiarColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "aquamarine";
});

document.getElementById("agregarElemento").addEventListener("click", function () {
    const inputTexto = document.getElementById("inputTexto");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = inputTexto.value;
    document.getElementById("lista").appendChild(nuevoElemento);
    inputTexto.value = "";
});

document.getElementById("eliminarElemento").addEventListener("click", function () {
    let lista = document.getElementById("lista");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild)
    } else {
        alert("No hay mas elementos para eliminar")
    }
})