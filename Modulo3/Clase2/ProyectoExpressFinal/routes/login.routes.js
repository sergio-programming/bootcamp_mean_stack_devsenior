import express from 'express';
import { login } from '../controllers/loginController.js';

const router = express.Router();

//Rutas de login
router.post('/', login);

export default router;