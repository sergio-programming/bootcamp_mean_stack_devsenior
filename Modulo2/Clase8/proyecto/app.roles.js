const express = require('express');
const jwt = require('jsonwebtoken');

const app = express()

// Middleware para usar json
app.use(express.json());

const CLAVE_SECRETA = "clave_super_secreta";

// Array de usuarios
const usuarios = [
    { "usuario": "Sergio", "rol": "admin" },
    { "usuario": "Maria", "rol": "estudiante" }
]


app.post('/login', (req, res) => {
    const { usuario } = req.body

    const user = usuarios.find(u => u.usuario === usuario)
    
    // Si no se encuentra el usuario, se responde con error 401 (no autorizado)
    if (!user) return res.status(401).send('Usuario no encontrado');
    
    // Si el usuario se encuentra se genera un token como usuario y rol como payload
    //EL token expirara en 1 hora
    const token = jwt.sign({ usuario: user.usuario, rol: user.rol }, CLAVE_SECRETA, { expiresIn: "1h" });

    // Se devuelve el token como formato JSON
    res.json({ token });
});

// Middleware para verificar la validez del token JWT
function verificarToken (req, res, next) {
    const autHeader = req.headers.authorization;

    // Si no hay encabezado, responde con error 401
    if (!autHeader) {
        res.status(401).json({ error: "No es posible el acceso ya que falta el token" })
    }

    // Extrae el token desde el encabezado (formato: "Bearer token")
    const token = autHeader.split(' ')[1];

    try {
        // Verifica el token usando la clave secreta 
        const decoded = jwt.verify(token, CLAVE_SECRETA);

        // Si es valido, se alamacena la informacion del usuario en req.usuario
        req.usuario = decoded;

        // Continua con la siguiente funcion en la ruta
        next();

    } catch (error) {
        res.status(403).json({ error: "Token invalido" })
    }

};

// Middleware para permitir solo a usuarios con un rol específico
function soloRol(rolPermitido) {
    // Retorna un middleware que compara el rol del usuario autenticado

    return (req, res, next) => {
        if (req.usuario.rol !== rolPermitido) {
            // Si el rol no coincide, responde con un error 403
            return res.status(403).json({ error: "Acceso denegado: rol insuficiente" })
        }
        // Si el rol es valido, continua
        next()
    }
};

// Ruta publica accesible sin autenticacion
app.get('/', (req, res) => {
    res.json({ mensaje: "Bienvenido a la API publica" })
});

// Ruta accesible solo para usuarios con rol admin
app.get('/admin', verificarToken, soloRol('admin'), (req, res) => {
    res.json({ mensaje: `Hola ${req.usuario.usuario}, tienes acceso a la pagina de Admin` })
});

// Ruta accesible solo para usuarios con rol estudiante
app.get('/estudiante', verificarToken, soloRol('estudiante'), (req, res) => {
    res.json({ mensaje: `Hola ${req.usuario.usuario}, tienes acceso a la pagina de Estudiante` })
});

// Ruta accesible por cualquier usuario autenticado, sin importar el rol
app.get('/perfil', verificarToken, (req, res) => {
  res.send(`Hola ${req.usuario.usuario}, tu rol es ${req.usuario.rol}`);
});

app.listen(3000, () => {
    console.log("El servidor esta corriendo http://localhost:3000")
});