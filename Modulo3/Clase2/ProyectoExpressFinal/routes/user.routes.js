import express from 'express';
import {
    getUsers,
    getUserByUsername,
    registerUser,
    deleteUser
} from '../controllers/userController.js';

const router = express.Router()

// Rutas de usuarios
router.get('/', getUsers) // Para obtener todos los usuarios
router.get('/:username', getUserByUsername) // Para obtener un usuario por el username
router.post('/', registerUser) // Para registrar el usuario
router.delete('/:username', deleteUser)

export default router;