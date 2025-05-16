const jwt = require('jsonwebtoken');
const { HttpError, asyncHandler } = require('../middlewares/error.middleware');
const { log } = require('../middlewares/logger.middleware');
require('dotenv').config();

// Registro de usuario
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  log.debug(`Intento de registro para el email: ${email}`);

  // Verificar si el usuario ya existe
  let user = await global.UserModel.findOne({ email });
  if (user) {
    log.warn(`Intento de registro con email ya existente: ${email}`);
    throw new HttpError('El usuario ya existe', 400);
  }

  // Crear nuevo usuario
  try {
    user = new global.UserModel(name, email, password);

    // Guardar usuario en DB o JSON
    await user.save();
    log.info(`Usuario registrado exitosamente: ${email}`);

    // Crear payload para JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    // Generar JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          log.error(`Error al generar token JWT: ${err.message}`);
          throw new HttpError('Error al generar el token', 500);
        }
        res.json({ token });
      }
    );
  } catch (error) {
    log.error(`Error al registrar usuario: ${error.message}`);
    throw new HttpError(`Error al crear usuario: ${error.message}`, 500);
  }
});

// Login de usuario
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  log.debug(`Intento de login para el email: ${email}`);

  try {
    // Verificar si el usuario existe
    let user = await global.UserModel.findOne({ email });
    if (!user) {
      log.warn(`Intento de login con email no existente: ${email}`);
      throw new HttpError('Credenciales inválidas', 401);
    }

    // Verificar si el usuario tiene el método comparePassword
    if (typeof user.comparePassword !== 'function') {
      log.error(`Error crítico: El objeto usuario no tiene el método comparePassword. Usuario: ${JSON.stringify(user)}`);
      throw new HttpError('Error interno: método de verificación no disponible', 500);
    }

    // Verificar contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      log.warn(`Contraseña incorrecta para el usuario: ${email}`);
      throw new HttpError('Credenciales inválidas', 401);
    }

    log.info(`Login exitoso para el usuario: ${email}`);

    // Crear payload para JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    // Generar JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          log.error(`Error al generar token JWT: ${err.message}`);
          throw new HttpError('Error al generar el token', 500);
        }
        res.json({ token });
      }
    );
  } catch (error) {
    // Si el error ya es un HttpError, simplemente reenviar
    if (error instanceof HttpError) {
      throw error;
    }
    // De lo contrario, crear un nuevo error con detalles
    log.error(`Error en el proceso de login: ${error.message}`);
    throw new HttpError(`Error al procesar el login: ${error.message}`, 500);
  }
});

// Obtener usuario autenticado
exports.getMe = asyncHandler(async (req, res) => {
  try {
    // Buscar usuario sin incluir la contraseña
    const user = await global.UserModel.findById(req.user.id);
    if (!user) {
      log.warn(`Usuario no encontrado al obtener perfil. ID: ${req.user.id}`);
      throw new HttpError('Usuario no encontrado', 404);
    }
    
    log.debug(`Perfil obtenido correctamente para el usuario ID: ${req.user.id}`);
    
    // Eliminar la contraseña del objeto antes de enviarlo
    const userToSend = { ...user };
    delete userToSend.password;
    
    res.json(userToSend);
  } catch (error) {
    log.error(`Error al obtener perfil de usuario: ${error.message}`);
    throw new HttpError(`Error al obtener perfil: ${error.message}`, 500);
  }
}); 