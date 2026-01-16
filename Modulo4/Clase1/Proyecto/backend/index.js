import express from 'express';
import cors from 'cors';

// Creamos la instancia de la aplicacion express
const app = express();

// Habilitamos CORS para permitir solicitudes desde cualquier origen
// Esto es útil en desarrollo cuando el frontend y backend
// están en servidores/puertos distinto
app.use(cors());

// Definimos el puerto
const PORT = 3000;

// Creamos un arreglo con datos simulados de usuarios
const usuarios = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', edad: 28, genero: 'Masculino' },
  { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@example.com', edad: 25, genero: 'Femenino' },
  { id: 3, nombre: 'Carlos López', email: 'carlos.lopez@example.com', edad: 31, genero: 'Masculino' },
  { id: 4, nombre: 'María Fernández', email: 'maria.fernandez@example.com', edad: 22, genero: 'Femenino' },
  { id: 5, nombre: 'Luis Ramírez', email: 'luis.ramirez@example.com', edad: 35, genero: 'Masculino' },
  { id: 6, nombre: 'Paula Torres', email: 'paula.torres@example.com', edad: 27, genero: 'Femenino' },
  { id: 7, nombre: 'Andrés Vargas', email: 'andres.vargas@example.com', edad: 29, genero: 'Masculino' },
  { id: 8, nombre: 'Camila Rojas', email: 'camila.rojas@example.com', edad: 24, genero: 'Femenino' },
  { id: 9, nombre: 'Santiago Castro', email: 'santiago.castro@example.com', edad: 33, genero: 'Masculino' },
  { id: 10, nombre: 'Valentina Martínez', email: 'valentina.martinez@example.com', edad: 26, genero: 'Femenino' },
  { id: 11, nombre: 'Javier Morales', email: 'javier.morales@example.com', edad: 30, genero: 'Masculino' },
  { id: 12, nombre: 'Daniela Sánchez', email: 'daniela.sanchez@example.com', edad: 23, genero: 'Femenino' },
  { id: 13, nombre: 'Felipe Navarro', email: 'felipe.navarro@example.com', edad: 34, genero: 'Masculino' },
  { id: 14, nombre: 'Isabella Jiménez', email: 'isabella.jimenez@example.com', edad: 21, genero: 'Femenino' },
  { id: 15, nombre: 'Mateo Herrera', email: 'mateo.herrera@example.com', edad: 32, genero: 'Masculino' },
  { id: 16, nombre: 'Lucía Cárdenas', email: 'lucia.cardenas@example.com', edad: 28, genero: 'Femenino' },
  { id: 17, nombre: 'Tomás Gutiérrez', email: 'tomas.gutierrez@example.com', edad: 36, genero: 'Masculino' },
  { id: 18, nombre: 'Gabriela Salazar', email: 'gabriela.salazar@example.com', edad: 25, genero: 'Femenino' },
  { id: 19, nombre: 'Emilio Ortega', email: 'emilio.ortega@example.com', edad: 27, genero: 'Masculino' },
  { id: 20, nombre: 'Natalia Mendoza', email: 'natalia.mendoza@example.com', edad: 29, genero: 'Femenino' }
];

// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    return res.status(200).json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({"mensaje": "Usuario no encontrado"});
    };

    return res.status(200).json(usuario)

});

// Iniciamos el servidor Express en el puerto definido
// Cuando esté listo, mostramos un mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
