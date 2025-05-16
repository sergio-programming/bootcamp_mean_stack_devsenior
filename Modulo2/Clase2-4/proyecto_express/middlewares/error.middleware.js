/**
 * Middleware para manejo centralizado de errores
 * Proporciona códigos de error estándar HTTP
 */

// Error personalizado con código HTTP
class HttpError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Middleware que captura errores en controladores async
const asyncHandler = (fn) => (req, res, next) => 
  Promise.resolve(fn(req, res, next)).catch(next);

// Middleware que verifica si una ID es válida según el formato usado
const validateId = (req, res, next) => {
  const id = req.params.id;
  
  // Si usamos MongoDB, verificar formato ObjectId
  if (global.UserModel.name === 'model' && !require('mongoose').Types.ObjectId.isValid(id)) {
    return next(new HttpError('ID de recurso no válido', 400));
  }
  
  // Para almacenamiento JSON, verificar que sea un UUID válido 
  if (global.UserModel.name === 'User') {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidPattern.test(id)) {
      return next(new HttpError('ID de recurso no válido', 400));
    }
  }
  
  next();
};

// Middleware que maneja errores HTTP
const errorHandler = (err, req, res, next) => {
  // Si el error es una instancia de HttpError, usamos su código de estado
  const statusCode = err.statusCode || 500;
  
  // En producción, no devolvemos detalles técnicos
  const message = process.env.NODE_ENV === 'production' && statusCode === 500
    ? 'Error en el servidor'
    : err.message || 'Error en el servidor';
  
  // Registrar errores en la consola
  console.error(`[Error ${statusCode}]: ${err.message}`);
  if (statusCode === 500) {
    console.error(err.stack);
  }
  
  // Responder con el error formateado
  res.status(statusCode).json({
    error: {
      message,
      code: statusCode,
      // En desarrollo, incluir detalles y stack trace
      ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
    }
  });
};

// Middleware para recursos no encontrados
const notFoundHandler = (req, res, next) => {
  const error = new HttpError(`Recurso no encontrado - ${req.originalUrl}`, 404);
  next(error);
};

module.exports = {
  HttpError,
  asyncHandler,
  errorHandler,
  notFoundHandler,
  validateId
}; 