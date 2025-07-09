const express = require('express');
const jwt = require('jsonwebtoken');

const app = express()

// Middleware para usar json
app.use(express.json());

const CLAVE_SECRETA = "mi_clave_secreta";

app.post('/login', (req, res) => {
    const { usuario } = req.body
    
    if (usuario) {

        const token = jwt.sign({usuario}, CLAVE_SECRETA, {expiresIn: '1h'} );
        console.log(token)
        res.json({token})

    } else {
        res.status(400).json({ error: "usuario requerido" })
    }
})

app.get('/protegido', (req, res) => {
    const autHeader = req.headers.authorization;
    console.log(autHeader)

    const token = autHeader.split(" ")[1];
    console.log(token)

    try {
        
        const decoded = jwt.verify(token, CLAVE_SECRETA);
        console.log(decoded)
        res.status(200).json({ mensaje: `acceso autorizado a: ${decoded.usuario}` })

    } catch (error) {
        res.status(403).json({ mensaje: "Token invalido o expirado, no autorizado" })   
    }

})


app.listen(3000, () => {
    console.log("El servidor esta corriendo http://localhost:3000")
});