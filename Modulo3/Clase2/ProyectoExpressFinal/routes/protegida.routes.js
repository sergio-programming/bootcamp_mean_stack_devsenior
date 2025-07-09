import express from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verificarToken, (req, res) => {
    res.status(200).json({
        mensaje: `Hola ${req.user.user}, estás autorizado para ver este panel.`,
        rol: req.user.role
    });
});

export default router;