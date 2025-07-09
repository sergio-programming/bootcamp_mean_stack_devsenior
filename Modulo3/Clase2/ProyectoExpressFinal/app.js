import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'
import loginRoutes from './routes/login.routes.js';
import protegidaRoutes from './routes/protegida.routes.js';

dotenv.config()

//Instancia de express
const app = express();

//Middleware para parsear json
app.use(express.json());

//Ruta principal
app.get('/', (req, res) => {
    return res.status(200).json({ mensaje: "Bienvenido a la API de Usuarios" });
})

//Rutas de usuarios
app.use('/api/users', userRoutes);
//Ruta de login
app.use('/api/login', loginRoutes);
//Ruta protegida
app.use('/api/panel-users', protegidaRoutes);

//Conexion a la base de datos
mongoose.connect(process.env.URI , {})
.then(() => console.log("Conectado a la base de datos de Usuarios"))
.catch((error) => console.error("Error al conectar con MongoDB:", error));

//Escucha del puerto
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
});