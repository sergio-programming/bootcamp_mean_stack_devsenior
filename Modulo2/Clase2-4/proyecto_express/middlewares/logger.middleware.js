/**
 * Middleware de logging para solicitudes y respuestas
 */
const fs = require('fs');
const path = require('path');

// Asegurar que existe el directorio de logs
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Archivo de log para solicitudes
const requestLogFile = path.join(logDir, 'requests.log');

// Niveles de log
const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG'
};

// Función para escribir en el log
const writeToLog = (message, level = LOG_LEVELS.INFO) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}\n`;
  
  // Escribir al archivo
  fs.appendFileSync(requestLogFile, logMessage);
  
  // También mostrar en consola si no es producción
  if (process.env.NODE_ENV !== 'production') {
    console.log(logMessage);
  }
};

// Logger para solicitudes
const requestLogger = (req, res, next) => {
  // Capturar el tiempo de inicio
  req.startTime = Date.now();
  
  // Generar un ID único para la solicitud
  req.requestId = Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  
  // Crear una copia de body para el log (evitando contraseñas)
  const body = { ...req.body };
  if (body.password) body.password = '[REDACTED]';
  
  // Construir mensaje de log
  const message = `REQUEST ${req.requestId} - ${req.method} ${req.originalUrl} - IP: ${req.ip} - Body: ${JSON.stringify(body)}`;
  
  writeToLog(message, LOG_LEVELS.INFO);
  
  // Capturar el método original para enviar respuestas
  const originalSend = res.send;
  
  // Sobrescribir el método send para capturar las respuestas
  res.send = function(body) {
    // Restaurar el método original
    res.send = originalSend;
    
    // Calcular el tiempo de procesamiento
    const responseTime = Date.now() - req.startTime;
    
    // Construir mensaje de log para la respuesta
    let responseBody = body;
    try {
      // Si el cuerpo es un JSON string, parsearlo
      if (typeof body === 'string') {
        responseBody = JSON.parse(body);
        // Ocultar tokens JWT por seguridad
        if (responseBody.token) responseBody.token = '[REDACTED]';
      }
    } catch (e) {
      // Si no es un JSON, usar como está
      responseBody = body;
    }
    
    const responseMessage = `RESPONSE ${req.requestId} - ${res.statusCode} - Time: ${responseTime}ms - Body: ${JSON.stringify(responseBody)}`;
    
    // Log del nivel apropiado según el código de estado
    if (res.statusCode >= 500) {
      writeToLog(responseMessage, LOG_LEVELS.ERROR);
    } else if (res.statusCode >= 400) {
      writeToLog(responseMessage, LOG_LEVELS.WARN);
    } else {
      writeToLog(responseMessage, LOG_LEVELS.INFO);
    }
    
    // Llamar al método original con los argumentos
    return originalSend.apply(res, arguments);
  };
  
  next();
};

// Middleware para registrar errores
const errorLogger = (err, req, res, next) => {
  // Construir mensaje de error detallado
  const errorDetails = {
    requestId: req.requestId || 'unknown',
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    statusCode: err.statusCode || 500,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  };
  
  writeToLog(`ERROR ${JSON.stringify(errorDetails)}`, LOG_LEVELS.ERROR);
  
  // Pasar al siguiente middleware
  next(err);
};

// Función de utilidad para logging programático
const log = {
  error: (message) => writeToLog(message, LOG_LEVELS.ERROR),
  warn: (message) => writeToLog(message, LOG_LEVELS.WARN),
  info: (message) => writeToLog(message, LOG_LEVELS.INFO),
  debug: (message) => writeToLog(message, LOG_LEVELS.DEBUG)
};