import express from 'express';
import {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    deleteUser
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id', getUserByEmail);
router.post('/', createUser);
// router.put('/:id', updateSucursal);
router.delete('/:id', deleteUser);

export default router;