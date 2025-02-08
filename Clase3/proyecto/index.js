function validadorEdades() {
    let continuar = "";
    do {
        let nombre = prompt("Por favor ingrese el nombre: ");
        const edad = parseInt(prompt("Por favor ingrese la edad: "));
        
        if (isNaN(edad) || edad == "") {
            alert(`Debe ingresar una edad valida`);        
        } else if (edad < 0) {
            alert(`La edad no puede ser menor a cero`); 
        } else if (edad >= 0 && edad < 6) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `${nombre} tiene ${edad} años y se encuentra en la infancia`;
        document.getElementById("lista").appendChild(elemento);
        } else if (edad >= 6 && edad < 12) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `${nombre} tiene ${edad} años y se encuentra en la niñez`;
            document.getElementById("lista").appendChild(elemento);
        } else if (edad >= 12 && edad < 18) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `${nombre} tiene ${edad} años y se encuentra en la adolescencia`;
            document.getElementById("lista").appendChild(elemento);
        } else if (edad >= 18 && edad < 30) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `${nombre} tiene ${edad} años y es un adulto(a) joven`;
            document.getElementById("lista").appendChild(elemento);
        } else if (edad >= 30 && edad < 50) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `${nombre} tiene ${edad} años y se encuentra en la adultez`;
            document.getElementById("lista").appendChild(elemento);
        } else if (edad >= 50 && edad < 70) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `${nombre} tiene ${edad} años y es un adulto(a) mayor`;
            document.getElementById("lista").appendChild(elemento);
        } else if (edad >= 70 && edad < 100) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `${nombre} tiene ${edad} años y se encuentra en la tercera edad`;
            document.getElementById("lista").appendChild(elemento);
        } else if (edad >= 100 && edad < 110) {
            let elemento = document.createElement("li"); 
            elemento.textContent = `Felicitaciones!! ${nombre}. Usted tiene ${edad} años y es una persona centenaria`;
            document.getElementById("lista").appendChild(elemento);
        } else {
            alert(`Dudo que ${nombre} tenga ${edad} años`);
        }



        do {
            continuar = prompt("Desea validar la etapa de la vida de otra persona (SI/NO): ").toUpperCase();
            if (continuar !== "SI" && continuar !== "NO") {
                alert("Debe ingresar SI o NO. Intente nuevamente por favor")                
            }   
        } while (continuar != "SI" && continuar !== "NO");
     
        
    } while (continuar !== "NO");
    
}

validadorEdades()