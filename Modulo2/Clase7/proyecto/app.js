import express from 'express';
import mongoose from 'mongoose';   
const app = express()

// Middleware para leer JSON
app.use(express.json());

// Conectar a MongoDB local
mongoose.connect('mongodb://127.0.0.1:27017/academia', {})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB: (', err));

// Esquema sin restricciones
const EstudianteSchema = new mongoose.Schema({}, { strict: false });
const Estudiante = mongoose.model('Estudiante', EstudianteSchema, 'estudiantes');

// Ruta para obtener todos los estudiantes
app.get('/estudiantes', async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        return res.status(200).json(estudiantes);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al obtener los estudiantes' });
    }
});

app.post('/estudiantes', async (req, res) => {
    try {
        const { nombre, edad, curso, correo } = req.body;
        const estudiante = new Estudiante({ nombre, edad, curso, correo });
        await estudiante.save()
        return res.status(201).json({ "Estudiante creado": estudiante  })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al crear el estudiante' });
    }
})

app.put('/estudiantes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, edad, curso, correo } = req.body

        const estudiante = await Estudiante.findById(id)

        if (!estudiante) {
            return res.status(404).json({ mensaje: "Estudiante no encontrado" })
        }

        estudiante.nombre = nombre;
        estudiante.edad = edad;
        estudiante.curso = curso;
        estudiante.correo = correo;

        await estudiante.save()

        return res.status(200).json({ "Estudiante actualizado correctamente": estudiante  })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error al actualizar el estudiante' });
    }
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});