import express from 'express';
import {
    getSucursales,
    getSucursalById,
    createSucursal,
    updateSucursal,
    deleteSucursal
} from '../controllers/sucursalController.js';
import { verifyRole, verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', verifyToken, getSucursales);
router.get('/:id', verifyToken, getSucursalById);
router.post('/', verifyToken, createSucursal);
router.put('/:id', verifyToken, updateSucursal);
router.delete('/:id', verifyToken, verifyRole(["admin"]), deleteSucursal);

export default router;