import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'json-web-token';

const SECRET_KEY = process.env.SECRET_KEY;

export const login = async(req, res) => {
    try {

        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ mensaje : 'El email y el password son obligatorios' });
        }

        const user = await User.findOne({ email : email });

        if (!user) {
            return res.status(404).json({ mensaje : `No hay un usuario registrado con el email ${email}` });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({ mensaje : 'La contraseña proporcionada es incorrecta' })
        }

        const token = await jwt.sign(
            { email: user.email, rol: user.rol },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

    } catch (error) {
        console.error('Error en el login: ', error);
        return res.status(500).json({ mensaje : 'Error al iniciar sesión' });
    }
};