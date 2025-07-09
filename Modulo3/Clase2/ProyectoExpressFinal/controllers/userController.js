import User from '../models/User.js'; 
import bcrypt from 'bcrypt';

//Funcion para obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
        
        const users = await User.find()

        if (users.length === 0) {
            return res.status(404).json({ error: "No existen usuarios registrados actualmente" });
        }

        return res.status(200).json({ usuarios: users });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" })
    }
};

export const getUserByUsername = async (req, res) => {
    try {
        
        const { username } = req.params;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: `No existe un usuario ${username} registrado` })
        }

        return res.status(200).json({ usuario: user });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });
    }
};

export const registerUser = async (req, res) => {
    try {
        
        const { username, password, role } = req.body;
        const roleLower = role.toLowerCase()

        if (!username || !password || !role) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        if (typeof username !== 'string' || typeof password !== 'string' || typeof roleLower !== 'string') {
            return res.status(400).json({ error: "El username, el password y el role deben ser textos" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(409).json({ error: `El usuario ${username} ya se encuentra registrado` });
        }

        if (roleLower !== 'admin' && roleLower !== 'user') {
            return res.status(400).json({ error: "El role debe ser 'admin' o 'user'" });
        }

        //Hasheamos el password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({ username, password: hashedPassword, role: roleLower })
        await newUser.save();

        return res.status(201).json({ mensaje: `Usuario ${username} creado exitosamente` });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        
        const { username } = req.params;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: `El usuario ${username} no se encuentra registrado` });
        }

        await User.deleteOne({ username });
        return res.status(200).json({ mensaje: `El usuario ${username} se ha eliminado exitosamente` });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });
    }    
}