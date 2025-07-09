import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Acceso denegado. No se proporciono token" });
    }

    const token = authHeader.split(' ')[1];

    try {
        
        const decoded = jwt.verify(token, process.env.CLAVE_SECRETA);
        req.user = decoded; // Puedes acceder al usuario decodificado en las rutas
        next();

    } catch (error) {
        console.error(error);
        return res.status(403).json({ error: 'Token inválido o expirado.' });        
    }
}