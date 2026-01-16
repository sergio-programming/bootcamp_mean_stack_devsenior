import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import { connectDB } from './config/db.js';
import { connectToDatabase } from './config/db.js';
import { incidentRoutes } from './routes/incidents.routes.js';
import { userRoutes } from './routes/users.routes.js';

// Instancia de express
const app = express();

// Configuración de las variables de entorno
dotenv.config();

// Configuración de middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));

//Rutas
app.use('/api/incidents', incidentRoutes);
app.use('/api/users', userRoutes);

// Conexión a la base de datos
// connectDB();
connectToDatabase();

// Configuración para levantar el servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})
