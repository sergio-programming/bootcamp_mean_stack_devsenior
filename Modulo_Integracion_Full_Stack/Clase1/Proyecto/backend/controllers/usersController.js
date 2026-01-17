import { User, userRoles } from '../models/users.js';
import bcrypt from 'bcryptjs';
import {
    getUsersService,
    getUserByIdService,
    getUserByEmail,
    createUserService,
    updateUserService
} from '../services/users.services.js';

export const getUsers = async (req, res) => {
    try {
        
        const users = await getUsersService();

        if (users.length === 0) {
            return res.status(404).json({ message : "No se encuentran usuarios registrados actualmente" });
        }

        return res.status(200).json(users);

    } catch (error) {
        console.error("Error al obtener los usuarios: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });        
    }
};

export const getUserById = async (req, res) => {
    try {
        
        const { id } = req.params;
        const user = await getUserByIdService(id);

        if (!user) {
            return res.status(404).json({ message : "No se encuentra un usuario registrado con ese id" });
        }

        const { password: _, ...userResponse } = user;
        return res.status(200).json(userResponse);

    } catch (error) {
        console.error("Error al obtener el usuario: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });        
    }
};

export const createUser = async (req, res) => {
    try {
        
        const saltRounds = 10;
        const { fullName, email, password, role } = req.body;

        if (!fullName || !email || !password || !role) {
            return res.status(400).json({ message : "Los campos requeridos son obligatorios" });
        }

        const user = await getUserByEmail(email);

        if (user) {
            return res.status(409).json({ message : `Ya se encuentra un usuario registrado con el email ${email}` })
        }

        if (fullName.length < 3) {
            return res.status(400).json({ message : "El nombre debe tener una longitud mínima de 3 caracteres" });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ message : 'El email debe tener un formato válido' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message : 'La contraseña debe tener una longitud mínima de 6 caracteres' });
        }

        if (!userRoles.includes(role)) {
            return res.status(400).json({ message : 'Debe seleccionar una de las opciones válidas para asignar el rol de usuario' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const createdUser = await createUserService({
            fullName,
            email,
            password: hashedPassword,
            role
        })

        const { password: _, ...userResponse } = createdUser;
        return res.status(201).json({
            message : "El usuario se ha creado correctamente",
            user : userResponse
        })

    } catch (error) {
        console.error("Error al crear el usuario: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });
    }
};

export const updateUser = async (req, res) => {
    try {
        
        const { id } = req.params;
        const body = req.body;

        const user = await getUserByIdService(id);

        if (!user) {
            return res.status(404).json({ message : "No se encuentra un usuario registrado con ese id" })
        }

        if (body.fullName && body.fullName.length < 3) {
            return res.status(400).json({ message : "El nombre debe tener una longitud mínima de 3 caracteres" });
        }

        if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
            return res.status(400).json({ message : 'El email debe tener un formato válido' });
        }

        if (body.role && !userRoles.includes(body.role)) {
            return res.status(400).json({ message : 'Debe seleccionar una de las opciones válidas para asignar el rol de usuario' });
        }

        if (body.isActive !== undefined && typeof body.isActive !== "boolean") {
            return res.status(400).json({ message : 'El valor debe ser booleano' });
        }

        const updatedUser = await updateUserService(id, body);

        const { password: _, ...userResponse } = updatedUser;
        return res.status(200).json({
            message : "El usuario se ha actualizado correctamente",
            user : userResponse
        })

    } catch (error) {
        console.error("Error al actualizar el usuario: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        
        const { id } = req.params;
        const userToDelete = await User.findById(id);

        if (!userToDelete) {
            return res.status(404).json({ message :  "No se encuentra un usuario registrado con ese id" })
        }

        await userToDelete.deleteOne();

        return res.status(200).json({ message : "El usuario se ha eliminado correctamente" });

    } catch (error) {
        console.error("Error al eliminar el usuario: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });
    }
}