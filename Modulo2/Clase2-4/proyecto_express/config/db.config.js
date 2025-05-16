const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Crear directorio data si no existe
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Verificar si existe el archivo users.json
const usersFilePath = path.join(dataDir, 'users.json');
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

let usingJson = false;

const connectDB = async () => {
  try {
    if (process.env.USE_JSON_STORAGE === 'true') {
      console.log('Usando almacenamiento JSON local');
      usingJson = true;
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/auth-api');
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    console.log('Usando almacenamiento JSON local como alternativa');
    usingJson = true;
  }
};

const isUsingJsonStorage = () => usingJson;

module.exports = { connectDB, isUsingJsonStorage }; 