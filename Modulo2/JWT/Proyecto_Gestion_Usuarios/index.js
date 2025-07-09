// Importacion de librerias
import express from 'express';
import { PORT, uri } from './config.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { registerUser, login, getUsers } from './user.controller.js';

// Instancia de express
const app = express()

app.use(express.json())
app.use(cookieParser())

// Conexion a base de datos
mongoose.connect(uri, {})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error al conectar con MongoDB: ", err))

app.get('/', (req, res) => {
    res.send("<h1>Bienvenido a la API de autenticacion de usuarios</h1>")
});

app.post('/login', login);

app.post('/register', registerUser);

app.get('/users', getUsers)

//app.post('/logout', )


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});
