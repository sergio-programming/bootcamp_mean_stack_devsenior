import { User } from '../models/users.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async(req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ mensaje : "El email y el password son obligatorios" });
        }

        const user = await User.findOne({ "email" : email });

        if (!user) {
            return res.status(404).json({ mensaje : `No existe un usuario con el email ${email}` });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({ mensaje : "La contraseña proporcionada es incorrecta" });
        }

        const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.status(200).json({token});

    } catch (error) {  
        console.error("Error en login:", error); 
        return res.status(500).json({ mensaje : 'Error al iniciar sesion' });
    }
};