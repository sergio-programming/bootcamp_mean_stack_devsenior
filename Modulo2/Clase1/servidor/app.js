// Creando nuestro servidor

// Primordial el modulo http para crear el servidor
const { log } = require("console");
const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text-plain"});
    res.end("Hola este es el primer servidor con Node JS");
})

server.listen(3000, () => {
    console.log("Servidor ejecutandose en http://localhost:3000");
    
})