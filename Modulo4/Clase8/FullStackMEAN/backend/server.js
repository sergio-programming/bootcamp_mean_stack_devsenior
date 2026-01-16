// Importaciones
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes.js';
import { authRoutes } from './routes/auth.routes.js';
import { productRoutes } from './routes/product.routes.js';

import { connectDB } from './config/db.js';

// Instancia de express
app = express();

// Configuración de variables de entorno
dotenv.config();

// Configuración de middlewares
app.use(express.json()); // Permite solicitudes en formato JSON
app.use(cors()); // Habilita cors para permitir peticiones externas

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/login', authRoutes);
app.use('/api/products', productRoutes);

// Conexión de la base de datos
connectDB();

// Configuración para levantar el servidor

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})

