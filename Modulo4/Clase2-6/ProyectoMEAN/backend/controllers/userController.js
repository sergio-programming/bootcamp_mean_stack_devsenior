import { User } from '../models/users.js';
import bcrypt from 'bcryptjs';

export const getUsers = async(req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });

        if (users.length === 0) { // Acuerdese que si no hay usuarios devuelve un array vacio
            return res.status(404).json({ mensaje : "No hay usuarios registrados actualmente" });
        }

        return res.status(200).json(users);

    } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });        
    }
};

export const getUserById = async(req, res) => {
    try {
        
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ mensaje : `No existe un usuario con número de id ${id}` });
        }

        return res.status(200).json(user);

    } catch (error) {
        console.error('Error al obtener el usuario: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });       
    }
};

export const getUserByEmail = async(req, res) => {
    try {
        
        const { email } = req.params;
        const user = await User.findOne({ "email" : email });

        if (!user) {
            return res.status(404).json({ mensaje : `No existe un usuario con el email ${email}` });
        }

        return res.status(200).json(user);

    } catch (error) {
        console.error('Error al obtener el usuario: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });   
    }
}

export const createUser = async(req, res) => {
    try {
        
        const { email, nombre, password, role } = req.body;
        const saltRounds = 10;

        if (!email || !nombre || !password || !role) {
            return res.status(400).json({ mensaje : "Los campos email, nombre, password y role son obligatorios" });
        }

        const user = await User.findOne({ "email" : email });

        if (user) {
            return res.status(409).json({ mensaje : `Ya existe un usuario con email ${email}` });
        }

         const hashedPassword = await bcrypt.hash(password, saltRounds);

        const nuevoUsuario = new User ({
            email,
            nombre,
            password: hashedPassword,
            role
        });

        const usuario = await nuevoUsuario.save();
        return res.status(201).json({ mensaje : `El usuario ${usuario.email} se creo correctamente` });

    } catch (error) {
        console.error('Error al crear el usuario: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });        
    }
};

export const deleteUser = async(req, res) => {
    try {
        
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ mensaje : `No se encontro un usuario con el id ${id}` });
        }

        await User.deleteOne({ _id: id });
        return res.status(200).json({ mensaje: "Usuario eliminado exitosamente" });

    } catch (error) {
        console.error('Error al eliminar al usuario: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });
    }
};

