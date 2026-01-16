import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import sucursalRoutes from './routes/sucursal.routes.js';
import userRoutes from './routes/user.routes.js';
import loginRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


// Instancia de express
const app = express();

dotenv.config();

// Configuración de middlewares
app.use(express.json()); //Permite el analisis de solicitudes en formato JSON
app.use(cors()) // Habilita CORS para permitir peticiones externas

// Rutas
app.use('/api/sucursales', sucursalRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/auth', loginRoutes);

// Conexión a la base de datos
connectDB();

// Antigua conexion a la base de datos
// mongoose.connect('mongodb://localhost:27017/ProyectoCRUDMean', {})
//    .then(() => console.log('Conectado a la base de datos ProyectoCRUDMean'))
//    .catch((error) => console.error(`Error al conectar a MongoDB ${error}`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

