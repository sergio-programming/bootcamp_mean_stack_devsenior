const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const usersFilePath = path.join(dataDir, 'users.json');
if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

let usingJson = true;

const connectDB = async () => {
    try {
        if (process.env.USE_JSON_STORAGE === 'true') {
            usingJson = true;
            console.log('Using JSON storage for users');
            return
        }
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/auth-api'); 
    } catch (error) {
        console.error('Error al conectar con Mongo DB', error.message);
        console.log('Usando almacenamiento en JSON local como alternativa');
        usingJson = true;
    }
}

const isUsingJsonStorage = () => usingJson;

module.exports = {
    connectDB,
    isUsingJsonStorage
};