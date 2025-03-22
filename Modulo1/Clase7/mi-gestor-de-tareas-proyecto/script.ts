class Tarea {
    public id: number;
    public titulo: string;
    public descripcion: string;
    public completado: boolean;

    constructor(id: number, titulo: string, descripcion: string, completado: boolean) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.completado = completado
    }
};

const tareas: Tarea[] = [
    new Tarea (3, "Estudiar JavaScript", "Estudiar y practicar con funciones normales y funciones flecha", false),
    new Tarea(2, "Practicar eventos en JavaScript", "Crear eventos para botones y formularios en una página web", false),
    new Tarea(3, "Estudiar JavaScript", "Estudiar y practicar con funciones normales y funciones flecha", false),
    new Tarea(4, "Resolver ejercicios de arreglos", "Manipular arrays con métodos como map, filter y reduce", false),
    new Tarea(5, "Hacer un proyecto con JavaScript", "Desarrollar una pequeña aplicación interactiva", false),
    new Tarea(6, "Estudiar promesas y async/await", "Entender cómo funciona el manejo de asincronía en JavaScript", false),
    new Tarea(7, "Explorar el DOM", "Modificar y acceder a elementos del DOM con JavaScript", false),
    new Tarea(8, "Aprender sobre localStorage", "Guardar y recuperar datos en el navegador con localStorage", false),
    new Tarea(9, "Implementar fetch API", "Hacer peticiones a una API usando fetch y manejar las respuestas", false),
    new Tarea(10, "Optimizar código con buenas prácticas", "Refactorizar código y aplicar principios como DRY y KISS", false)
]

function renderizarTareas(): void {
    const listaTareas = document.getElementById("lista-tareas");
    if (!listaTareas) {
        console.error("No se encontro el contenedor de la lista");
        return;
    }

    listaTareas.innerHTML = "";

    tareas.forEach((tarea) => {
        const tareaElemento = document.createElement("div");

        tareaElemento.className = `tarea ${tarea.completado ? "completada" : ""}`;
        tareaElemento.innerHTML = `
            <h3>${tarea.titulo}</h3>
            <p>${tarea.descripcion}</p>
            <p><strong>Estado:</strong> ${
                tarea.completado ? "Completada" : "Pendiente"
            }</p>
        `;
        listaTareas.appendChild(tareaElemento);
    });
}

document.addEventListener("DOMContentLoaded", renderizarTareas);