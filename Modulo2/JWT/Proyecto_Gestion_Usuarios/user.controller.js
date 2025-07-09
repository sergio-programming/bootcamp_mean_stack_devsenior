import User from './user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validateUsername, validatePassword, validateId } from './validator.js';
import { SECRET_JWT_KEY } from './config.js';


export const registerUser = async (req, res) => {
    try {
        const { id, username, password } = req.body

        const idError = validateId(id);
        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password)

        if (idError || usernameError || passwordError) {
            return res.status(400).json( {
                error: idError || usernameError || passwordError
            });
        }

        const user = await User.findOne({ username });
         
        if (user) {
            return res.status(409).json({ error: "El username ya se encuentra registrado" });
        }

        // Hasheamos la contraseña
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User ({ id, username, password: hashedPassword })
        await newUser.save()
        res.status(201).json({ 
            mensaje: "Usuario creado exitosamente",
            usuario: newUser
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al registrar usuario" })
    }
};

export const login = async (req, res) => {
    try {
        
        const { username, password } = req.body

        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);

        if (usernameError || passwordError) {
            return res.status(400).json({
                error: usernameError || passwordError
            });
        }

        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).json({ error: "El usuario no se encuentra registrado" });
        }

        const validarPassword = bcrypt.compareSync(password, user.password)

        if (!validarPassword) {
            return res.status(401).json({ error: "El password es invalido. No tiene autorizacion para acceder" })
        }

        //Generamos el token
        const token = jwt.sign({ id: user.id, username: user.username}, SECRET_JWT_KEY, { expiresIn: '1h' })

        res.cookie('access_token', token, {
            httpOnly: true, // La cookie solo se puede acceder en el servidor
            secure: process.env.NODE_ENV === 'production', // la cookie solo se puede acceder en https
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 // La cookie tiene un tiempo de validez de una hora
        })

        res.status(200).json({ mensaje: `Bienvenido a la sesion ${username}` })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Error al realizar el login" })
    }

};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ "usuarios": users })

        if (!users) {
            res.status(404).json({ mensaje: "No se encontraron usuarios registrados" })
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al obtener los usuarios" })
    }
}