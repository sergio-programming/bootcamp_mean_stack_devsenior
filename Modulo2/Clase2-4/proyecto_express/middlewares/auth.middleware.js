const jwt = require('jsonwebtoken');
const { HttpError } = require('./error.middleware');
const { log } = require('./logger.middleware');
require('dotenv').config();

const auth = (req, res, next) => {
  // Obtener token del header
  const token = req.header('x-auth-token') || req.header('Authorization')?.replace('Bearer ', '');

  // Verificar si no hay token
  if (!token) {
    log.warn(`Intento de acceso a ruta protegida sin token: ${req.originalUrl}`);
    return next(new HttpError('No hay token, autorización denegada', 401));
  }

  try {
    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Agregar el usuario al request
    req.user = decoded.user;
    log.debug(`Usuario ${req.user.id} autenticado correctamente para ruta: ${req.originalUrl}`);
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      log.warn(`Token expirado al acceder a ${req.originalUrl}`);
      return next(new HttpError('El token ha expirado, por favor inicie sesión nuevamente', 401));
    }
    if (err.name === 'JsonWebTokenError') {
      log.warn(`Token inválido al acceder a ${req.originalUrl}: ${err.message}`);
      return next(new HttpError('Token inválido', 401));
    }
    log.error(`Error de autenticación no esperado: ${err.message}`);
    return next(new HttpError('Error de autenticación', 401));
  }
};

// Middleware para verificar rol de administrador
const admin = (req, res, next) => {
  if (!req.user) {
    log.warn(`Intento de acceso a ruta de administrador sin autenticación previa: ${req.originalUrl}`);
    return next(new HttpError('No autorizado, autenticación requerida', 401));
  }
  
  if (req.user.role !== 'admin') {
    log.warn(`Usuario ${req.user.id} con rol '${req.user.role}' intentó acceder a ruta de administrador: ${req.originalUrl}`);
    return next(new HttpError('Acceso denegado, se requiere rol de administrador', 403));
  }
  
  log.debug(`Acceso de administrador permitido para usuario ${req.user.id} en ruta: ${req.originalUrl}`);
  next();
};

module.exports = { auth, admin }; 