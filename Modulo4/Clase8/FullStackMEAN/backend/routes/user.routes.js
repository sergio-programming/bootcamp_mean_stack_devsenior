import express from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    patchUser
} from '../controllers/userController.js';
import { verifyToken, verifyRol } from '../middlewares/auth.js';


const router = express.Router();

router.get('/', verifyToken, verifyRol, getUsers);
router.get('/:id', verifyToken, verifyRol, getUserById);
router.post('/', verifyToken, verifyRol, createUser);
router.put('/:id', verifyToken, verifyRol, updateUser);
router.patch('/:id', verifyToken, verifyRol, patchUser)
router.delete('/:id', verifyToken, verifyRol, deleteUser);

export default router;