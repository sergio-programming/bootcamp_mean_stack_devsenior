function validarEdad(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad)) {
        document.getElementById("mensaje"),textContent = `Debe ingresar un tipo de dato valido`;
    }

    if (edad >= 0 && edad < 6) {
        document.getElementById("mensaje").textContent = `${nombre} se encuentra en la infancia`;
    } else if (edad >= 6 && edad < 12) {
        document.getElementById("mensaje").textContent = `${nombre} se encuentra en la niñez`;
    } else if (edad >= 12 && edad < 18) {
        document.getElementById("mensaje").textContent = `${nombre} se encuentra en la adolescencia`;
    } else if (edad >= 18 && edad < 30) {
        document.getElementById("mensaje").textContent = `${nombre} es un adulto joven`;
    } else if (edad >= 30 && edad < 50) {
        document.getElementById("mensaje").textContent = `${nombre} se encuentra se encuentra en la adultez`;
    } else if (edad >= 50 && edad < 70) {
        document.getElementById("mensaje").textContent = `${nombre} se encuentra en la vejez`;
    } else if (edad >= 70 && edad < 120) {
        document.getElementById("mensaje").textContent = `${nombre} se encuentra en la tercera edad`;
    } else if (edad > 120) {
        document.getElementById("mensaje").textContent = `Dudo que ${nombre} tenga esa edad`;
    } else {
        document.getElementById("mensaje").textContent = `Debe ingresar una edad valida para ${nombre}`;
    }
}

document.getElementById("mybutton").addEventListener("click", validarEdad);