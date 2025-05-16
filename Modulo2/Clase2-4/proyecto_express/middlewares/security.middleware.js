const rateLimit = require('express-rate-limit');

// Limitador de tasa para las peticiones
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // límite de 100 peticiones por ventana de tiempo
  standardHeaders: true, // Devuelve información estándar en encabezados `RateLimit-*`
  legacyHeaders: false, // Deshabilita los encabezados `X-RateLimit-*`
  message: 'Demasiadas peticiones desde esta IP, por favor intente de nuevo después de 15 minutos'
});

// Limitador de tasa más estricto para intentos de login
const loginLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5, // limitar cada IP a 5 solicitudes de login por hora
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Demasiados intentos de inicio de sesión, por favor intente de nuevo después de una hora'
});

// Configuraciones de seguridad adicionales
const securityHeaders = (req, res, next) => {
  // Establecer encabezados de seguridad adicionales que no están cubiertos por helmet
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Encabezado para prevenir fugas de información
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Continuar al siguiente middleware
  next();
};
