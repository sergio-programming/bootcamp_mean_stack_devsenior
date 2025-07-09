const jwt = require('jsonwebtoken');

const usuarios = [
    {"nombre": "Sergio", "rol": "admin"},
    {"nombre": "Laura", "rol": "usuario"}
]

const clave = "mi_clave_secreta"
const clave2 = "mi_clave_secreta_2"

// Creamos el token
const token = jwt.sign(usuarios[0], clave)
const token2 = jwt.sign(usuarios[1], clave2)

console.log(`Token generado: ${token}`)
console.log(`Token generado: ${token2}`)

// Ahora vamos a verificar el token
const verificado = jwt.verify(token, clave)
const verificado2 = jwt.verify(token2, clave2)

console.log("Contenido del token: ", verificado)
console.log("Contenido del token: ", verificado2)