import express from 'express';
import { login } from '../controllers/loginController';
import router from './user.routes';

const router = express.Router();

router.post('/', login);

export default router;