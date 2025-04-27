const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { connectDB, isUsingJsonStorage } = require('./config/db.config');
const swaggerDocs = require('./config/swagger.config');

require('dotenv').config();

//Inicializar express
const app = express();

connectDB().then(() => {
    // Configurar modelo apropiado basado en la conexion
    if (isUsingJsonStorage()) {
        global.UserModel = require('./models/user.model.json');
        log.info('Usando almacenamiento en JSON local');
    } else {
        // Si se conecto a MongoDB usar el modelo mongoose
        global.UserModel = require('./models/user.model');
        log.info('Usando MongoDB para almacenar los usuarios');
    }

}).catch(err => {
    log.error(`Error a la base de datos: ${err.message}`);
});

// Midedleware de seguridad
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "script-src": ["'self'", "'unsafe-inline'"],
            "img-src": ["'self'", "data:"],
        },
    }
}));


app.use(securityHeaders); // Configuraciones de seguridad adicionales
app.use(cors()); // Habilitar CORS

app.use(express.json({limit: '1mb'})); // Para parsear JSON
app.use(express.urlencoded({limit: '1mb', extended: true})); // Middleware para parsear datos URL-encoded

// Aplicar limite de tasa a todas las solicitudes
app.use(apiLimiter);
