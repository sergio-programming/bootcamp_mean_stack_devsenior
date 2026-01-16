import express from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';
import router from './user.routes.js';
import { verifyRol, verifyToken } from '../middlewares/auth.js';

router = express.Router();

router.get('/', verifyToken, verifyRol, getProducts);
router.get('/:id', verifyToken, verifyRol, getProductById);
router.post('/', verifyToken, verifyRol, createProduct);
router.put('/:id', verifyToken, verifyRol, updateProduct);
router.delete('/:id', verifyToken, verifyRol, deleteProduct);

export default router;