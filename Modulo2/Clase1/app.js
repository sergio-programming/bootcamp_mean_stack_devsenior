console.log("Hola programadores con Node JS")
const { log } = require("console")
const fs = require("fs")

// Crear un archivo con contenido
fs.writeFileSync("mensaje.txt", "Este es un archivo creado con Node JS")

console.log("Archivo creado exitosamente");

