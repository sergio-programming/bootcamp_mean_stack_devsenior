// Middleware de validación
const { HttpError } = require('./error.middleware');

const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  
  // Validar campos requeridos
  if (!name || !email || !password) {
    return next(new HttpError('Por favor ingrese todos los campos requeridos', 400));
  }
  
  // Validar formato de email
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return next(new HttpError('Por favor ingrese un email válido', 400));
  }
  
  // Validar longitud de contraseña
  if (password.length < 6) {
    return next(new HttpError('La contraseña debe tener al menos 6 caracteres', 400));
  }
  
  next();
};

// Middleware de validación para login
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  
  // Validar campos requeridos
  if (!email || !password) {
    return next(new HttpError('Por favor ingrese todos los campos requeridos', 400));
  }
  
  // Validar formato de email
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return next(new HttpError('Por favor ingrese un email válido', 400));
  }
  
  next();
};

// Middleware para validar información de actualización de usuario
const validateUserUpdate = (req, res, next) => {
  const { name, email, role } = req.body;
  
  // Verificar que al menos un campo para actualizar esté presente
  if (!name && !email && !role) {
    return next(new HttpError('Por favor proporcione al menos un campo para actualizar', 400));
  }
  
  // Si se proporciona email, validar formato
  if (email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return next(new HttpError('Por favor ingrese un email válido', 400));
    }
  }
  
  // Si se proporciona rol, validar valores permitidos
  if (role && !['user', 'admin'].includes(role)) {
    return next(new HttpError('Rol inválido. Los valores permitidos son "user" o "admin"', 400));
  }
  
  next();
};

module.exports = { validateUser, validateLogin, validateUserUpdate }; 