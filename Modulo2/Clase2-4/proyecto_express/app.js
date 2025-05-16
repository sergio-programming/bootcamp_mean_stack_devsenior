require('dotenv').config(); // Carga de variables de entorno

const express = require('express');
const app = express();

// Configuraciones basicas
app.set("port", process.env.PORT || 3000); // Puerto de la aplicacion
app.set("json spaces", 2); // Espacios para las respuestas JSON

// Middlewares globales
app.use(express.json()); // Para parsear JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos URL-encoded

// Rutas principales
//const indexRoutes = require('./routes/index');
//app.use('/', indexRoutes);

// Middlewares para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ha ocurrido un error'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running in PORT: ${port}`);
    console.log('htp');
    
});