import jwt from 'json-web-token';

const SECRET_KEY = process.env.SECRET_KEY;

export const verifyToken = async(req, res, next) => {
    
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ mensaje : 'Token no proporcionado' });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = await jwt.decode(SECRET_KEY, token);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error al obtener el usuario: ' , error);
        return res.status(401).json({ mensaje : 'Token invalido' });
    }
};

// Verifica si el usuario tiene al menos uno de los roles permitidos
export const verifyRol = (rolesPermitidos) => {
  return (req, res, next) => {
    if (!req.user || !req.user.rol) {
      return res.status(403).json({ mensaje : 'Acceso denegado' });
    }

    if (!rolesPermitidos.includes(req.user.rol)) {
      return res.status(403).json({ mensaje : 'Acceso denegado' });
    }
    next();
  };
};