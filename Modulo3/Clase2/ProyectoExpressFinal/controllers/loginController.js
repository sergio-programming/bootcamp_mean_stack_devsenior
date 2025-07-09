import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const login = async (req, res) => {
    try {
        
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "El username y el password son obligatorios" });
        }

        if (typeof username !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ error: "El username y el password deben ser textos" });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: `No existe un usuario administrador ${username} registrado en nuestra base de datos` });
        }

        const passwordValid = await bcrypt.compare(password, user.password)
        if (!passwordValid) {
            return res.status(401).json({ error: "El acceso no autorizado. La contraseña es incorrecta." });
        }

        const token = jwt.sign({user: user.username, role: user.role}, process.env.CLAVE_SECRETA);
        return res.status(200).json({ mensaje: `Bienvenido ${username}. Acceso concedido.` ,token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });
    }
}