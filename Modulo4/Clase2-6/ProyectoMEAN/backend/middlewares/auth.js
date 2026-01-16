import jwt from 'jsonwebtoken';

export const verifyToken = async(req, res, next) => {

    const authHeader = req.headers.authorization;


    if (!authHeader) {
        return res.status(403).json({ mensaje : "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    try {        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ mensaje: 'Token inválido' });
    }

};

export const verifyRole = (rolesPermitidos) => {
    return (req, res, next) => {

        if (!req.user || !req.user.role) {
            return res.status(403).json({ mensaje: 'No se pudo verificar el rol del usuario' });
        }

        if (!rolesPermitidos.includes(req.user.role)) {
            return res.status(403).json({ mensaje : 'No tiene permiso para realizar esta acción' });
        }

        next();
    };
};