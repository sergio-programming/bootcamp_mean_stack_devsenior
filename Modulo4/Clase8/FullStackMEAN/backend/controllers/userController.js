import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const getUsers = async(req, res) => {
    try {
        
        const users = await User.find();

        if (users.length === 0) {
            return res.status(400).json({ mensaje : 'No hay usuarios registrados actualmente' });
        }

        return res.status(200).json(users);

    } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
};

export const getUserById = async(req, res) => {
    try {
        
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ mensaje : `No se encuentra un usuario registrado con el id ${id}` });
        }

        return res.status(200).json(user);

    } catch (error) {
        console.error('Error al obtener el usuario: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });        
    }
};

export const createUser = async(req, res) => {
    try {
        
        const { nombre, email, password, rol, activo } = req.body;
        const saltRounds = 10;

        if (!nombre || !email || !password || !rol || !activo) {
            return res.status(400).json({ mensaje : 'Todos los campos solicitados son obligatorios' });
        }

        const user = await User.findOne({ email : email });

        if (user) {
            return res.status(409).json({ mensaje : `Ya existe un usuario registrado con el email ${email}` });
        }

        if (password.length < 6) {
            return res.status(400).json({ mensaje : 'El password debe contener un minimo de 6 caracteres' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            nombre,
            email,
            password: hashedPassword,
            rol,
            activo
        })

        const userDB = await newUser.save();
        // No devuelve el password en la respuesta
        const { password: _, ...userResponse } = userDB.toObject();
        return res.status(201).json({ mensaje : `El usuario se creo correctamente`, user: userResponse });

    } catch (error) {
        console.error('Error al intentar crear el usuario: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });        
    }
};

export const updateUser = async(req, res) => {
    try {
        
        const { id } = req.params;
        const data = req.body;

        if (!nombre || !email || !rol || activo === undefined) {
            return res.status(400).json({ mensaje : 'Todos los campos solicitados son obligatorios' });
        };

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ mensaje : `No se encuentra un usuario registrado con el id ${id}`});
        }

        user.nombre = nombre;
        user.email = email;
        user.rol = rol;
        user.activo = activo;

        await user.save();
        const { password: _, ...userResponse } = user.toObject();
        return res.status(200).json({ mensaje : `El usuario se ha actualizado correctamente`, user: userResponse });

    } catch (error) {
        console.error('Error al actualizar el usuario: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
};

export const patchUser = async(req, res) => {
    try {
        
        const { id } = req.params;
        const data = req.body;

        if (Object.keys(data).length === 0) {
            return res.status(400).json({ mensaje : 'Se debe diligenciar al menos un campo para actualizar' });
        };

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ mensaje : `No se encuentra un usuario registrado con el id ${id}` });
        };

        Object.keys(data).forEach((key) => {
            user[key] = data[key];
        });

        await user.save();
        const { password: _, ...userResponse } = user.toObject();
        return res.status(200).json({ mensaje : 'Se ha actualizado algunos campos del usuario correctamente', userResponse });

    } catch (error) {
        console.error('Error al actualizar el usuario');
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
}

export const deleteUser = async(req, res) => {
    try {
        
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ mensaje : `No se encontra un usuario registrado con el id ${id}` });
        }

        await User.deleteOne({ _id: id });
        return res.status(200).json({ mensaje: "Usuario eliminado exitosamente", user });

    } catch (error) {
        console.error('Error al eliminar al usuario: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });
    }
};