import { error } from 'console';
import express from 'express';


// Creamos una instancia de express
const app = express();

// Middleware para parsear JSON
app.use(express.json());


// Lista de usuarios
const usuarios = [
    { "id": 1, "nombre": "Sergio", "edad": 36 },
    { "id": 2, "nombre": "Maria", "edad": 31 },
    { "id": 3, "nombre": "Mariana", "edad": 25 }
];

// Ruta principal
app.get('/', (req, res) => {
    return res.status(200).send("Bienvenido a la API de usuarios");
})

//Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    try {
        
        if (!usuarios) {
            return res.status(404).json({ error: "No se encontraron usuarios registrados" });
        }

        return res.status(200).json({ usuarios: usuarios });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });        
    }
})

// Ruta para obtener un usuario
app.get('/usuarios/:id', (req, res) => {
    //Obtenemos el parametro id de la URL y lo convertimos a numero
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "El id debe ser un número" });
        }

        const user = usuarios.find(u => u.id === id);

        if (!user) {
            return res.status(404).json({ error: `No se encuentra un usuario con id: ${id}` });
        }

        return res.status(200).json({ usuario: user });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });        
    }
});

// Ruta para registrar un nuevo usuario
app.post('/usuarios', (req, res) => {
    try {
        const { id, nombre, edad } = req.body;

        if (!id || !nombre || !edad) {
            return res.status(400).json({ error: "Los campos id, nombre y edad son obligatorios" });
        }

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ error: "El id debe ser un número entero positivo" });
        }

        if (isNaN(edad) || edad <= 0) {
            return res.status(400).json({ error: "La edad debe ser un número entero positivo" });
        }

        const user = usuarios.find(u => u.id === id);

        if (user) {
            return res.status(409).json({ error: "Ya existe un usuario registrado con ese ID" });
        }

        const newUser = { id, nombre, edad };

        usuarios.push(newUser);

        return res.status(201).json({ mensaje: "Usuario creado exitosamente", newUser });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });        
    }
})

// Ruta para actualizar usuarios
app.put('/usuarios/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, edad } = req.body;

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ error: "El id debe ser un número entero positivo" });
        }

        if (!nombre || !edad) {
            return res.status(400).json({ error: "Los campos nombre y edad son obligatorios" });
        }

        if (isNaN(edad) || edad <= 0) {
            return res.status(400).json({ error: "La edad debe ser un número entero positivo" });
        }

        const user = usuarios.find(u => u.id === id );

        if (!user) {
            return res.status(409).json({ error: `No se encuentra un usuario con id: ${id}` });
        }

        user.nombre = nombre;
        user.edad = edad;

        return res.status(200).json({ mensaje: "Usuario actualizado exitosamente", user });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });      
    }
})

// Ruta para eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
    try {

        const id = parseInt(req.params.id)

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ error: "El id debe ser un número entero positivo" });
        }

        const userIndex = usuarios.findIndex(u => u.id === id);

        if (userIndex === -1) {
            return res.status(409).json({ error: `No se encuentra un usuario con id: ${id}` });
        }

        usuarios.splice(userIndex, 1)

        return res.status(200).json({ mensaje: "Usuario eliminado exitosamente" });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });

    }
})


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})